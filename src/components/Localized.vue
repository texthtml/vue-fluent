<script>
import { l10n } from './LocalizationProvider.vue';
import createParseMarkup from './markup';

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

    console.log({ t: this });
    console.log({ elem });
    const bundle = this.l10n.getBundle(this.id);

    if (bundle === null) {
      return elem;
    }

    const msg = bundle.getMessage(this.id);
    console.log({ msg });

    const args = toArguments(this.$attrs);
    console.log({ args });

    const elems = {};
    if (elem.children !== undefined) {
      for (const child of elem.children.filter(({ data }) => data && data.attrs && data.attrs.l10n)) {
        elems[child.data.attrs.l10n] = child;
      }
    }

    console.log({elems});

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

        console.log("props", Object.entries(this.props))

        for (const [name, allowed] of Object.entries(this.props)) {
          if (allowed && msg.attrs.hasOwnProperty(name)) {
            data.props[name] = bundle.format(msg.attrs[name], args);
          }
        }
      }
    }

    console.log({ data });

    const messageValue = bundle.format(msg, args);
    console.log({ messageValue });

    // @todo void elements

    // @todo messageValue === null

    if (elem.children !== undefined &&
      elem.children.filter(child => child.tag !== undefined).length === 0
    ) {
      console.log({ tag, data, messageValue });
      return $createElement(
        tag,
        data,
        [messageValue],
      );
    }

    console.log({createParseMarkup})
    const parseMarkup = createParseMarkup();
    console.log({parseMarkup})
    const translationNodes = parseMarkup(messageValue);
    console.log({ translationNodes });

    const translatedChildren = translationNodes.map((childNode) => {
      console.log({ childNode });
      if (childNode.nodeType === childNode.TEXT_NODE) {
        return childNode.textContent;
      }

      // If the child is not expected just take its textContent.
      if (!childNode.attributes ||
        !childNode.attributes.hasOwnProperty("l10n") ||
        !elems[childNode.attributes.getNamedItem("l10n").value]
      ) {
        console.log(2, childNode.attributes.getNamedItem("l10n"));
        return childNode.textContent;
      }

      const sourceChild = elems[childNode.attributes.getNamedItem("l10n").value];

      // If the element passed as a prop to <Localized> is a known void element,
      // explicitly dismiss any textContent which might have accidentally been
      // defined in the translation to prevent the "void element tags must not
      // have children" error.
      // if (sourceChild.type in VOID_ELEMENTS) { // @todo
      //   console.log(3);
      //   return sourceChild;
      // }
        console.log(4);

      // TODO Protect contents of elements wrapped in <Localized>
      // https://github.com/projectfluent/fluent.js/issues/184
      // TODO  Control localizable attributes on elements passed as props
      // https://github.com/projectfluent/fluent.js/issues/185
      return $createElement(sourceChild.tag, sourceChild.data, childNode.textContent);
    });
    console.log({ tag, data, translatedChildren });

    return $createElement(
      tag,
      data,
      translatedChildren,
    );
  },
  methods: {
    relocalize() {
      this.$forceUpdate();
    },
  },
};
</script>
