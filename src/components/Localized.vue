<script>
import { l10n } from './LocalizationProvider.vue';
import createParseMarkup from '../lib/markup';

// @todo: try to get $... attrs before render

function toArguments(props) {
  const args = {};

  for (const [propname, propval] of Object.entries(props)) {
    if (propname.startsWith('_')) {
      const name = propname.substr(1);
      args[name] = propval;
    }
  }

  return args;
}

export default {
  name: 'Localized',
  props: {
    id: {
      type: String,
      required: true,
    },
    attrs: {
      type: Object,
      default: null,
    },
    props: {
      type: Object,
      default: null,
    },
  },
  inject: { l10n },
  mounted() {
    this.l10n.subscribe(this);
  },
  beforeDestroy() {
    this.l10n.unsubscribe(this);
  },
  methods: {
    relocalize() {
      this.$forceUpdate();
    },
  },
  render($createElement) {
    const slots = this.$scopedSlots.default({});

    if (slots.length !== 1) {
      throw new Error('<Localized/> expected to receive a single slot');
    }

    const elem = slots[0];

    if (elem.tag === undefined) {
      throw new Error('<Localized/> expected to receive a single node element');
    }

    const tag = elem.componentOptions ? elem.componentOptions.Ctor : elem.tag;

    const bundle = this.l10n.getBundle(this.id);

    if (bundle === null) {
      return elem;
    }

    const msg = bundle.getMessage(this.id);

    const args = toArguments(this.$attrs);

    const elems = {};
    if (elem.children !== undefined) {
      for (const child of elem.children.filter(({ data }) => data && data.attrs && data.attrs.l10n)) {
        elems[child.data.attrs.l10n] = child;
      }
    }

    const data = elem.data || {};

    if (msg.attrs) {
      if (this.attrs) {
        if (data.attrs === undefined) {
          data.attrs = {};
        }

        for (const [name, allowed] of Object.entries(this.attrs)) {
          if (allowed && msg.attrs.hasOwnProperty(name)) {
            data.attrs[name] = bundle.format(msg.attrs[name], args);
          }
        }
      }

      if (this.props) {
        if (data.props === undefined) {
          data.props = {};
        }


        for (const [name, allowed] of Object.entries(this.props)) {
          if (allowed && msg.attrs.hasOwnProperty(name)) {
            data.props[name] = bundle.format(msg.attrs[name], args);
          }
        }
      }
    }

    const messageValue = bundle.format(msg, args);

    if (elem.children !== undefined &&
      elem.children.filter(child => child.tag !== undefined).length === 0
    ) {
      return $createElement(
        tag,
        data,
        [messageValue],
      );
    }

    const parseMarkup = createParseMarkup();
    const translationNodes = parseMarkup(messageValue);

    const translatedChildren = translationNodes.map((childNode) => {
      if (childNode.nodeType === childNode.TEXT_NODE) {
        return childNode.textContent;
      }

      // If the child is not expected just take its textContent.
      if (!childNode.attributes ||
        !childNode.attributes.hasOwnProperty("l10n") ||
        !elems[childNode.attributes.getNamedItem("l10n").value]
      ) {
        return childNode.textContent;
      }

      const sourceChild = elems[childNode.attributes.getNamedItem("l10n").value];

      return $createElement(sourceChild.tag, sourceChild.data, childNode.textContent);
    });

    return $createElement(
      tag,
      data,
      translatedChildren,
    );
  },
};
</script>
