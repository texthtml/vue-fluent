/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withContexts } from '@storybook/addon-contexts/vue';
import Localized from '../src/components/Localized.vue';
import { contexts } from './config/contexts';
import SmallCaps from './SmallCaps';

storiesOf('Fluent', module)
  .addDecorator(withKnobs)
  .addDecorator(withContexts(contexts))
  .add('simple text', () => ({
    components: { Localized },
    template: `
      <Localized id="title">
        <h1>Hello, world!</h1>
      </Localized>`,
  }))
  .add('html attribute', () => ({
    components: { Localized },
    template: `
      <Localized id="input" :attrs="{ placeholder: true }">
        <input placeholder="John Doe"/>
      </Localized>`,
  }))
  .add('argument', () => ({
    components: { Localized },
    props: {
      name: {
        default: text('Name', 'World'),
      },
    },
    template: `
      <Localized id="greetings" :args="{name}">
        <h1>Hello, $name!</h1>
      </Localized>`,
  }))
  .add('children', () => ({
    components: { Localized },
    template: `
      <Localized id="children">
        <h1>Hello, <em style="color: red" l10n="name">World!</em></h1>
      </Localized>`,
  }))
  .add('prop', () => ({
    components: { Localized, SmallCaps },
    template: `
      <Localized id="prop" :attrs="{text: true}">
        <SmallCaps />
      </Localized>`,
  }))
  .add('main text to attribute (or prop)', () => ({
    components: { Localized, SmallCaps },
    template: `
      <Localized id="greetings" content="text" :args="{name: 'World'}">
        <SmallCaps />
      </Localized>`,
  }))
  .add('void element', () => ({
    components: { Localized, SmallCaps },
    template: `
      <Localized id="void" :attrs="{alt: true}">
        <img alt="xxx" />
      </Localized>`,
  }))
  .add('nested Localized', () => ({
    components: { Localized, SmallCaps },
    template: `
      <Localized id="prop" :attrs="{text: (text, {args}) => ({args: {...args || {}, text}})}">
        <Localized id="quote">
          <span>coucou</span>
        </Localized>
      </Localized>`,
  }))
  .add('preserve slot hierarchy', () => ({
    components: { Localized, SmallCaps },
    template: `
      <Localized id="prop" :attrs="{text: 'title'}" :content="false">
        <div>
          <SmallCaps text="ß" />
          <span>coucou</span>
          <span>coucou</span>
        </div>
      </Localized>
      `,
  }));
