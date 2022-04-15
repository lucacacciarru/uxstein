import { useTranslation } from 'react-i18next';

export const useFeatureShowcasePanel = () => {
    const { t } = useTranslation();
    const featureOneTexts = {
        title: t('landing.featureShowcase.1.title'),
        description: t('landing.featureShowcase.1.description'),
    };
    const featureTwoTexts = {
        title: t('landing.featureShowcase.2.title'),
        description: t('landing.featureShowcase.2.description'),
    };
    const featureThreeTexts = {
        title: t('landing.featureShowcase.3.title'),
        description: t('landing.featureShowcase.3.description'),
    };

    return {
        featureOneTexts,
        featureTwoTexts,
        featureThreeTexts
    }
}