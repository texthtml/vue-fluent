import LocalizationProvider from '../../src/components/LocalizationProvider.vue';
import { generateBundles } from './../l10n';

export const contexts = [{
  icon: 'globe',
  title: 'Locales',
  components: [LocalizationProvider],
  params: [
    { name: 'French', props: { bundles: generateBundles(["fr_FR"]) } },
    { name: 'English', props: { bundles: generateBundles(["en_GB"]) }, default: true },
  ],
}];
