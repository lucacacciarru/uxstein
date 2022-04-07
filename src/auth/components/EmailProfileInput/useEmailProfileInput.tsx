import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { GenericToast } from '../../../_shared/components/GenericToast';
import { getUserProfile } from '../../store/selectors';
import { checkEmail } from '../../utils/checkEmail';

export function useEmailProfileInput() {
  const { t } = useTranslation();
  const toast = useToast();

  const email = useSelector(getUserProfile)?.email as string;

  const mapErrorMessage: Record<string, string> = {};

  const [inputValue, setInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const text = {
    placeholder: email,
    title: t('auth.profile.label.email'),
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    if (!checkEmail(inputValue)) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.tooShort);
      return;
    }
    if (inputValue === email) {
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
    inputValue,
    inputError,
    errorMessage,
    text,
    onChange,
    onClick,
  };
}
