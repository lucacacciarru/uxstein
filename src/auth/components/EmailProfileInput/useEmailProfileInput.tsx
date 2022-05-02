import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAuth, useProfileInput } from '../../hooks';
import { getUserProfile } from '../../store/selectors';
import { checkEmail } from '../../utils/checkEmail';

export function useEmailProfileInput() {
  const { t } = useTranslation();
  const { updateProfile } = useAuth();
  const {
    errorMessage,
    inputError,
    inputValue,
    onChange,
    setErrorMessage,
    setInputError,
    id,
    resetSpecificValue,
  } = useProfileInput();

  const email = useSelector(getUserProfile)?.email as string;
  const mapErrorMessage: Record<string, string> = {
    isNotEmail: t('auth.profile.errors.email.isNotEmail'),
    equalEmail: t('auth.profile.errors.email.equalEmail'),
  };

  const text = {
    placeholder: email,
    title: t('auth.profile.label.email'),
  };

  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedValue = inputValue.email || '';
    if (selectedValue === email) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.equalEmail);
      return;
    }
    if (!checkEmail(selectedValue)) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.isNotEmail);
      return;
    }
    updateProfile(id, { email: inputValue.email });
    setInputError(false);
    resetSpecificValue('email');
  };

  return {
    inputValue,
    inputError,
    errorMessage,
    text,
    onChange,
    onSubmit,
  };
}
