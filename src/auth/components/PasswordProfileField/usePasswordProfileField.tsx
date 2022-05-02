import { useTranslation } from 'react-i18next';
import { useAuth, useProfileInput } from '../../hooks';

export function usePasswordProfileField() {
  const { t } = useTranslation();
  const {
    errorMessage,
    inputError,
    inputValue,
    onChange,
    setErrorMessage,
    setInputError,
    id,
    resetSpecificValue,
    setInputValue,
  } = useProfileInput();
  const { updateProfile } = useAuth();

  const mapErrorMessage: Record<string, string> = {
    equal: t('auth.profile.errors.password.equal'),
    empty: t('auth.profile.errors.password.empty'),
  };

  const labels = {
    oldPassword: t('auth.profile.label.oldPassword'),
    newPassword: t('auth.profile.label.newPassword'),
  };

  function onSubmit(e: React.FormEvent<any>) {
    e.preventDefault();
    const selectedNewPassword = inputValue.newPassword;
    const selectedOldPassword = inputValue.oldPassword;

    if (selectedOldPassword === selectedNewPassword) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.tooShort);
      return;
    }
    updateProfile(id, { password: inputValue.newPassword });
    setInputError(false);
    resetSpecificValue('newPassword');
    resetSpecificValue('oldPassword');
  }
  return {
    inputValue,
    inputError,
    errorMessage,
    onChange,
    onSubmit,
    labels,
    setInputValue,
  };
}
