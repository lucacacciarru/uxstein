import { InitOptions } from 'i18next';

export const initI18n: InitOptions = {
  resources: {
    it: {
      translation: {
        'homepage.title': 'Sticazzi e mazzi',
      },
    },
    en: {
      translation: {
        title: 'Sticazzi e mazzi',
      },
    },
  },
  lng: 'it',
  fallbackLng: 'it',
};
