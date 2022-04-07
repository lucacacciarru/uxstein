import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { GenericToast } from '../../../_shared/components/GenericToast';
import { getUserProfile } from '../../store/selectors';

export function useUsernameProfileInput() {
  const { t } = useTranslation();
  const toast = useToast();

  const username = useSelector(getUserProfile)?.username as string;

  const mapErrorMessage: Record<string, string> = {
    tooShort: t('auth.form.errors.email.invalid'),
    empty: t('modal.textInputModal.errors.renameEmptyText'),
  };

  const [inputValue, setInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const text = {
    placeholder: username,
    title: t('auth.profile.label.username'),
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    if (inputValue.length < 3) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.tooShort);
      return;
    }
    if (inputValue.trim().length === 0) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.empty);
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
  };

  return {
    inputError,
    errorMessage,
    text,
    onChange,
    onClick,
    inputValue,
  };
}
