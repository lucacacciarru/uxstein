import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GenericToast } from '../../../_shared/components/GenericToast';

export function usePasswordProfileField() {
  const { t } = useTranslation();
  const toast = useToast();

  const mapErrorMessage: Record<string, string> = {
    tooShort: t('auth.form.errors.email.invalid'),
    empty: t('modal.textInputModal.errors.renameEmptyText'),
  };

  const [inputValue, setInputValue] = useState<{
    oldPassword: string;
    newPassword: string;
  }>({ oldPassword: '', newPassword: '' });
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const labels = {
    oldPassword: t('auth.profile.label.oldPassword'),
    newPassword: t('auth.profile.label.newPassword'),
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  function onClick() {
    if (inputValue.oldPassword.length < 5) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.tooShort);
      return;
    }

    if (inputValue.newPassword.length < 5) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.tooShort);
      return;
    }

    setInputError(false);
    toast({
      render: () => (
        <GenericToast
          status="success"
          translationKey={'auth.form.buttonLogin'}
          data-testid="role"
        />
      ),
    });
  }
  return {
    inputValue,
    inputError,
    errorMessage,
    onChange,
    onClick,
    labels,
  };
}
