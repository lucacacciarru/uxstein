import { useToast } from '@chakra-ui/react';
import { TranslationKey } from '../../types/i18n';
import { GenericToast } from '../GenericToast';

type Params = {
  onSubmit: Function;
  onClose: () => void;
  toastTranslation: TranslationKey;
};

export function useActionModal({
  onSubmit,
  onClose,
  toastTranslation,
}: Params) {
  const toast = useToast();
  const onClick = () => {
    onSubmit();
    onClose();
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
