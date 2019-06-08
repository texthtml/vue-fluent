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
    return {
      [l10n]: new VueLocalization(this.bundles),
    };
  },
  render() {
    return this.$scopedSlots.default({})
  },
};
</script>
