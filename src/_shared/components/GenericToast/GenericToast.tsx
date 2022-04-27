import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TranslationKey } from '../../types/i18n';

export type ToastStatus = 'info' | 'warning' | 'success' | 'error';

type Props = {
  translationKey: TranslationKey;
  status?: ToastStatus;
};

export const GenericToast: React.FC<Props> = ({ status, translationKey }) => {
  const { t } = useTranslation();
  return (
    <Alert data-testid="toast" status={status}>
      <AlertIcon />
      <AlertTitle mr={2}>{t(translationKey)}</AlertTitle>
    </Alert>
  );
};
