import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import en from './en.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: getLocales()[0].languageCode,
  debug: false,
  resources: {
    en: {
      translation: en,
    },
  },
});

// export directly and use i18n.t to translate functionally
export { i18n };
