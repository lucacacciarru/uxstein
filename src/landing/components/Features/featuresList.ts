import { IconComponentModel } from '../../../_shared/components';
import { TranslationKey } from '../../../_shared/types/i18n';

export type Feature = {
  title: TranslationKey;
  body: TranslationKey;
  iconName: keyof IconComponentModel;
};

export const featuresList: Feature[] = [
  {
    body: 'landing.features.card.template.body',
    iconName: 'Template',
    title: 'landing.features.card.template.title',
  },
  {
    body: 'landing.features.card.edit.body',
    iconName: 'Edit',
    title: 'landing.features.card.edit.title',
  },
  {
    body: 'landing.features.card.block.body',
    iconName: 'ResizeIcon',
    title: 'landing.features.card.block.title',
  },
  {
    body: 'landing.features.card.export.body',
    iconName: 'Upload',
    title: 'landing.features.card.export.title',
  },
];
