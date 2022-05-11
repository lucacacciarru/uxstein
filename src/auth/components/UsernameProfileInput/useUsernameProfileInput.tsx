import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAuth, useProfileInput } from '../../hooks';
import { getUserProfile } from '../../store/selectors';

export function useUsernameProfileInput() {
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
    updateProfile(id, { username: inputValue.username });
    resetSpecificValue('username');
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
