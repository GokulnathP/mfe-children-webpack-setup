import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextXhrBackend from 'i18next-xhr-backend';
import React from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

i18next
  .use(I18NextXhrBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: process.env.NODE_ENV !== 'test',
    interpolation: { escapeValue: false },
    react: {
      wait: process.env.NODE_ENV !== 'test',
      useSuspense: false,
    },
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    load: 'languageOnly',
  });

function TranslationProvider({ children }) {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

export default TranslationProvider;
