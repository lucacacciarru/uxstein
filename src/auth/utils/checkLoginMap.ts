import { LoginFormData } from '../components';
import { TranslationKey } from '../../_shared/types/i18n';
import { checkEmail } from './checkEmail';

type CheckFieldsLogin = Record<
  keyof LoginFormData,
  Record<string, (loginFormData: LoginFormData) => TranslationKey | null>
>;

export const checkLoginMap: CheckFieldsLogin = {
  email: {
    isEmail: (loginFormData: LoginFormData) => {
      if (!checkEmail(loginFormData.email)) {
        return 'auth.form.errors.email.invalid';
      }
      return null;
    },
  },
  password: {
    isRightLenght: (loginFormData: LoginFormData) => {
      if (loginFormData.password.length < 6) {
        return 'auth.form.errors.password.tooShort';
      }
      return null;
    },
  },
};
