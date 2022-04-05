import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export function useLastUpdatePersona(updateAt: number) {
  const { t } = useTranslation();

  const timeBetweenTwoDays = (updatedAt: number): number => {
    const date = Date.now();
    const differenceInSeconds = date - updatedAt;
    const differenceInDays = Math.round(
      differenceInSeconds / (24 * 60 * 60 * 1000),
    );
    return differenceInDays;
  };

  const timeBetween = useMemo(() => {
    const difference = timeBetweenTwoDays(updateAt);
    return difference <= 30
      ? t('personCard.timeEdit', { count: difference })
      : t('personCard.timeEdit_more');
  }, [t, updateAt]);

  return {
    timeBetween,
  };
}
