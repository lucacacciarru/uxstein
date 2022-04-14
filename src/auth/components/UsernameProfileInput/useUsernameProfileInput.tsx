import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useProfileInput } from '../../hooks';
import { getUserProfile } from '../../store/selectors';

export function useUsernameProfileInput() {
  const { t } = useTranslation();
  const {
    errorMessage,
    inputError,
    inputValue,
    onChange,
    setErrorMessage,
    setInputError,
    showToast,
  } = useProfileInput({ toastText: 'auth.profile.toast.username' });

  const username = useSelector(getUserProfile)?.username as string;

  const mapErrorMessage: Record<string, string> = {
    empty: t('modal.textInputModal.errors.renameEmptyText'),
  };

  const text = {
    placeholder: username,
    title: t('auth.profile.label.username'),
  };

  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedValue = inputValue.username || '';
    if (selectedValue.length === 0) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.empty);
      return;
    }
    setInputError(false);
    showToast();
  };

  return {
    inputError,
    errorMessage,
    text,
    onChange,
    onSubmit,
    inputValue,
  };
}
