import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationKey } from '../../types/i18n';
import { GenericToast } from '../GenericToast';

export function useTextInputModal(
  onSubmit: (value: string) => void,
  onClose: Function,
  toastTranslation: TranslationKey,
) {
  const { t } = useTranslation();
  const toast = useToast();

  const mapErrorMessage: Record<string, string> = {
    tooLong: t('persona.modal.errors.renameTextTooLong'),
    empty: t('persona.modal.errors.renameEmptyText'),
  };

  const [nameValue, setNameValue] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeInputRename = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const checkAndConfirm = () => {
    if (nameValue.length > 20) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.tooLong);
      return;
    }
    if (nameValue.trim().length === 0) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.empty);
      return;
    }
    setInputError(false);
    onSubmit(nameValue);
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
    nameValue,
    onChangeInputRename,
    inputError,
    errorMessage,
    checkAndConfirm,
  };
}
