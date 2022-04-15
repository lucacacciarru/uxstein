import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FeatureCard } from '../FeatureCard';
import { featuresList } from './featuresList';

export function useFeatures() {
  const { t } = useTranslation();
  const sectionStyle = {
    w: 'full',
    background: 'brand.lighter',
    minH: '70vh',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12',
    p: '6',
  };

  const cardContainerStyle = {
    w: 'full',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12',
  };

  const title = t('landing.features.title');

  const renderFeatures = useMemo(
    () =>
      featuresList.map((feature, i) => (
        <FeatureCard {...feature} key={`${feature.body}-${i}`} />
      )),
    [],
  );

  return {
    title,
    renderFeatures,
    sectionStyle,
    cardContainerStyle,
  };
}
