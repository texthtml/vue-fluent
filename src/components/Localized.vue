<script>
import { l10n } from './LocalizationProvider.vue';
import createParseMarkup from '../lib/markup';

export default {
  name: 'Localized',
  props: {
    id: {
      type: String,
      required: true,
    },
    attrs: {
      type: Object,
      default() {
        return {};
      },
    },
    args: {
      type: Object,
      default() {
        return {};
      },
    },
    deep: {
      type: Boolean,
      default: true,
    },
  },
  inject: { l10n },
  render($createElement) {
    const slots = this.$scopedSlots.default({});

    if (slots.length !== 1) {
      throw new Error('<Localized/> expected to receive a single slot');
    }

    const elem = slots[0];

    if (elem.tag === undefined) {
      throw new Error('<Localized/> expected to receive a single node element');
    }


    const bundle = this.l10n.getBundle(this.id);

    if (bundle === null) {
      return elem;
    }


    const data = elem.data || {};

    if (data.props === undefined) {
      data.props = elem.componentOptions ? elem.componentOptions.propsData : {};
    }

    if (data.attrs === undefined) {
      data.attrs = {};
    }


    const msg = bundle.getMessage(this.id);

    if (msg.attrs) {
      const attrs = Object.entries(this.attrs).reduce((attrs, [key, val]) => {
        const allowed = val === true || typeof val === "string" || typeof val === "function";
        if (!allowed || !msg.attrs.hasOwnProperty(key)) {
          return attrs;
        }

        if (typeof val === "function") {
          return {
            ...attrs,
            ...val(attrs, bundle.format(msg.attrs[key], this.args)),
          };
        }

        return {
          ...attrs,
          [typeof val === "string" ? val : key]: bundle.format(msg.attrs[key], this.args),
        };
      }, {
        ...data.props,
        ...data.attrs,
      });

      const props = elem.componentOptions ? elem.componentOptions.Ctor.options.props : {};
      for (const key in attrs) {
        data[props[key] !== undefined ? "props" : "attrs"][key] = attrs[key];
      }
    }


    data.scopedSlots = elem.componentOptions ? {
      default: () => elem.componentOptions.children,
    } : {};


    const messageValue = bundle.format(msg, this.args);
    const tag = elem.componentOptions ? elem.componentOptions.Ctor : elem.tag;

    if (elem.children !== undefined &&
      elem.children.filter(child => child.tag !== undefined).length === 0
    ) {
      return $createElement(
        tag,
        data,
        [messageValue],
      );
    }

    if (!this.deep) {
      return $createElement(
        tag,
        data,
        elem.children
      );
    }

    const parseMarkup = createParseMarkup();
    const translationNodes = parseMarkup(messageValue);

    const elems = {};
    if (elem.children !== undefined) {
      for (const child of elem.children.filter(({ data }) => data && data.attrs && data.attrs.l10n)) {
        elems[child.data.attrs.l10n] = child;
      }
    }

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
