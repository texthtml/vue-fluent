/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import LocalizationProvider from '../src/components/LocalizationProvider.vue';
import Localized from '../src/components/Localized.vue';
import { generateBundles } from './l10n';
import SmallCaps from './SmallCaps';

storiesOf('Fluent', module)
  .addDecorator(withKnobs)
  .add('simple text', () => ({
    components: { LocalizationProvider, Localized },
    template: `
      <LocalizationProvider :bundles="generateBundles()">
        <Localized id="title">
          <h1>Hello, world!</h1>
        </Localized>
      </LocalizationProvider>`,
    methods: { generateBundles: () => generateBundles(['fr']) },
  }))
  .add('html attribute', () => ({
    components: { LocalizationProvider, Localized },
    template: `
      <LocalizationProvider :bundles="generateBundles()">
        <Localized id="input" :attrs="{ placeholder: true }">
          <input placeholder="John Doe"/>
        </Localized>
      </LocalizationProvider>`,
    methods: { generateBundles: () => generateBundles(['fr']) },
  }))
  .add('argument', () => ({
    components: { LocalizationProvider, Localized },
    props: {
      name: {
        default: text('Name', 'World'),
      },
    },
    template: `
      <LocalizationProvider :bundles="generateBundles()">
        <Localized id="greetings" :_name="name">
          <h1>Hello, $name!</h1>
        </Localized>
      </LocalizationProvider>`,
    methods: { generateBundles: () => generateBundles(['fr']) },
  }))
  .add('children', () => ({
    components: { LocalizationProvider, Localized },
    template: `
      <LocalizationProvider :bundles="generateBundles()">
        <Localized id="children">
          <h1>Hello, <em style="color: red" l10n="name">World!</em></h1>
        </Localized>
      </LocalizationProvider>`,
    methods: { generateBundles: () => generateBundles(['fr']) },
  }))
  .add('prop', () => ({
    components: { LocalizationProvider, Localized, SmallCaps },
    template: `
      <LocalizationProvider :bundles="generateBundles()">
        <Localized id="prop" :props="{text: true}">
          <SmallCaps />
        </Localized>
      </LocalizationProvider>`,
    methods: { generateBundles: () => generateBundles(['fr']) },
  }))
  .add('void element', () => ({
    components: { LocalizationProvider, Localized, SmallCaps },
    template: `
      <LocalizationProvider :bundles="generateBundles()">
        <Localized id="void" :attrs="{alt: true}">
          <img alt="xxx" />
        </Localized>
      </LocalizationProvider>`,
    methods: { generateBundles: () => generateBundles(['fr']) },
  }));

  // @todo:
  // - change language
