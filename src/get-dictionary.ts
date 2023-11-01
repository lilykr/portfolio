/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable import/no-unassigned-import */
import 'server-only';

import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./messages/fr.json').then((module) => module.default),
  de: () => import('./messages/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  dictionaries[locale]?.() ?? dictionaries.en();
