import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePersonas } from '../../../persona/hook/usePersonas';
export function useFormRename() {
  const { uploadPersona } = usePersonas();
  const { t } = useTranslation();

  const mapErrorMessage: Record<string, string> = {
    tooLong: t('renamePersonaModal.errors.tooLong'),
    emty: t('renamePersonaModal.errors.empty'),
  };

  const [nameValue, setNameValue] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeInputRename = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const checkAndConfirmRename = (personaId: string, closeModal: () => void) => {
    if (nameValue.length > 20) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.tooLong);
      return;
    }
    if (nameValue.trim().length === 0) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.emty);
      return;
    }
    setInputError(false);
    uploadPersona(personaId, { title: nameValue });
    closeModal();
  };

  return {
    nameValue,
    onChangeInputRename,
    inputError,
    errorMessage,
    checkAndConfirmRename,
  };
}
