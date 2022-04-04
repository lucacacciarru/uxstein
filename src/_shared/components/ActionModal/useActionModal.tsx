import { useToast } from '@chakra-ui/react';
import { TranslationKey } from '../../types/i18n';
import { GenericToast } from '../GenericToast';

export function useActionModal(
  callback: Function,
  toastTranslation: TranslationKey,
) {
  const toast = useToast();
  const onClick = () => {
    callback();
    toast({
      render: () => (
        <GenericToast
          status="success"
          translationKey={toastTranslation}
          data-testid="role"
        />
      ),
    });
  };
  return {
    onClick,
  };
}
