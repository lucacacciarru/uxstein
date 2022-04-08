import { useTranslation } from 'react-i18next';
import { useProfileInput } from '../../hooks';

export function usePasswordProfileField() {
  const { t } = useTranslation();
  const {
    errorMessage,
    inputError,
    inputValue,
    onChange,
    setErrorMessage,
    setInputError,
    showToast,
  } = useProfileInput({ toastText: 'auth.profile.toast.password' });

  const mapErrorMessage: Record<string, string> = {
    tooShort: t('auth.form.errors.email.invalid'),
    empty: t('modal.textInputModal.errors.renameEmptyText'),
  };

  const labels = {
    oldPassword: t('auth.profile.label.oldPassword'),
    newPassword: t('auth.profile.label.newPassword'),
  };

  function onSubmit(e: React.FormEvent<HTMLDivElement>) {
    e.preventDefault();
    const selectedNewPassword = inputValue.newPassword || '';
    const selectedOldPassword = inputValue.oldPassword || '';

    if (selectedOldPassword.length < 4 || selectedNewPassword.length < 4) {
      setInputError(true);
      setErrorMessage(mapErrorMessage.tooShort);
      return;
    }
    setInputError(false);
    showToast();
  }
  return {
    inputValue,
    inputError,
    errorMessage,
    onChange,
    onSubmit,
    labels,
  };
}
