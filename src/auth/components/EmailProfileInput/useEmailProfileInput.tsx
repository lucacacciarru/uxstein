import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useProfileInput } from '../../hooks';
import { getUserProfile } from '../../store/selectors';
import { checkEmail } from '../../utils/checkEmail';

export function useEmailProfileInput() {
  const { t } = useTranslation();
  const {
    errorMessage,
    inputError,
    inputValue,
    onChange,
    setErrorMessage,
    setInputError,
    showToast,
  } = useProfileInput({ toastText: 'auth.profile.toast.email' });

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
    setInputError(false);
    showToast();
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
