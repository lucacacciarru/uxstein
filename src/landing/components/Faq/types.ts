import { IconComponentModel } from '../../../_shared/components';
import { TranslationKey } from '../../../_shared/types/i18n';

export type FaqCategories = 'auth' | 'builder' | 'template' | 'share';

export type Faq = {
  id: string;
  question: TranslationKey;
  answer: TranslationKey;
  cat: FaqCategories;
};

export type FaqButton = {
  buttonLabel: TranslationKey;
  icon: keyof IconComponentModel;
};
