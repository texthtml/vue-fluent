import { FluentBundle } from 'fluent/compat';
import { negotiateLanguages } from 'fluent-langneg/compat';

const MESSAGES_ALL = {
  'fr-FR': `
title = Bonjour, monde !
input =
  .placeholder = Jean Dupont
greetings = Bonjour, { $name } !
children = Bonjour, <em l10n="name">monde<em/> !
prop =
  .text = Bonjour, monde!
void =
  .alt = pas d'image
  `,
  'en-US': `
title = Hello, world!
input =
  .placeholder = John Doe
greetings = Hello, { $name }!
children = Hello, <em l10n="name">world</em>!
prop =
  .text = Hello, world!
void =
  .alt = no image
  `,
};

export function* generateBundles(userLocales) {
  const currentLocales = negotiateLanguages(
    userLocales,
    ['en-US', 'fr-FR'],
    { defaultLocale: 'fr-FR' }
  );

  for (const locale of currentLocales) {
    const bundle = new FluentBundle(locale);
    bundle.addMessages(MESSAGES_ALL[locale]);
    yield bundle;
  }
};
