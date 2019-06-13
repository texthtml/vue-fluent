<script>
import VueLocalization from '../lib/localization';

export const l10n = Symbol('l10n');

export default {
  name: 'LocalizationProvider',
  props: {
    bundles: {
      // type: Generator,
      required: true,
      // @todo: validator
    },
  },
  provide() {
    this[l10n] = new VueLocalization(this.bundles);
    return {
      [l10n]: this[l10n],
    };
  },
  watch: {
    bundles(bundles) {
      this[l10n].setBundles(bundles);
    },
  },
  render() {
    return this.$scopedSlots.default({})
  },
};
</script>
