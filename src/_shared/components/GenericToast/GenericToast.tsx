import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TranslationKey } from '../../types/i18n';

type Props = {
  translationKey: TranslationKey;
  status?: 'info' | 'warning' | 'success' | 'error';
};

export const GenericToast: React.FC<Props> = ({ status, translationKey }) => {
  const { t } = useTranslation();
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle mr={2}>{t(translationKey)}</AlertTitle>
    </Alert>
  );
};
