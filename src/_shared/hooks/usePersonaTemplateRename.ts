import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Persona } from '../../persona/store/types/general';

export function usePersonaTemplateRename(
  rename: (id: string, properties: Omit<Partial<Persona>, 'id'>) => void,
) {
  const { t } = useTranslation();

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

  const checkAndConfirmRename = (personaId: string, closeModal: () => void) => {
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
    rename(personaId, { title: nameValue });
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
