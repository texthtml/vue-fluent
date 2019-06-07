export default {
  name: 'SmallCaps',
  props: {
    text: {
      type: String,
      default: '♥',
    },
  },
  template: '<span style="font-variant: small-caps" title="test">{{ text }}</span>',
};
