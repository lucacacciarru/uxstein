import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function useTextInputModal(
  onSubmit: (value: string) => void,
  onClose: Function,
) {
  const { t } = useTranslation();

  const mapErrorMessage: Record<string, string> = {
    tooLong: t('modal.textInputModal.errors.textTooLong'),
    empty: t('modal.textInputModal.errors.renameEmptyText'),
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
  };

  return {
    nameValue,
    onChangeInputRename,
    inputError,
    errorMessage,
    checkAndConfirm,
  };
}
