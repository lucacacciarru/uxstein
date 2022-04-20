// TODO: replace imgRows with real ones
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { landingImgLibrary } from '../../assets/imgLibrary';

export const useMediaShowcaseSection = () => {
  const { t } = useTranslation();

  const title = t('landing.mediaShowcase.title');
  const labelButton = t('landing.mediaShowcase.labelButton');

  const imgRows = useMemo(
    () => [
      [
        Array(15).fill(landingImgLibrary.main),
        Array(15).fill(landingImgLibrary.main),
      ],
      [
        Array(15).fill(landingImgLibrary.main),
        Array(15).fill(landingImgLibrary.main),
      ],
    ],
    [],
  );

  return {
    title,
    labelButton,
    imgRows,
  };
};
