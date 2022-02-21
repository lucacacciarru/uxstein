import { InitOptions } from 'i18next';
import { en } from './en';
import { it } from './it';

export const initI18n: InitOptions = {
  resources: {
    it,
    en,
  },
  lng: 'it',
  fallbackLng: 'it',
};