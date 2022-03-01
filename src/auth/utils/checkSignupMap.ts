import { TranslationKey } from '../../_shared/types/i18n';
import { SignupFormData } from '../components';
import { checkEmail } from './checkEmail';

type CheckFieldsSignup = Record<
  keyof SignupFormData,
  Record<string, (signupData: SignupFormData) => TranslationKey | null>
>;

export const checkSignupMap: CheckFieldsSignup = {
  email: {
    isEmail: (signupData: SignupFormData) => {
      if (!checkEmail(signupData.email)) {
        return 'auth.form.errors.email.invalid';
      }
      return null;
    },
  },
  password: {
    isRightLength: (signupData: SignupFormData) => {
      if (signupData.password.length < 6) {
        return 'auth.form.errors.password.tooShort';
      }
      return null;
    },
    hasCapitalLetter: (signupData: SignupFormData) => {
      const regex = /\\*[A-Z]/;
      if (!signupData.password.match(regex)) {
        return 'auth.form.errors.password.noCapitalLetters';
      }
      return null;
    },
    hasNumber: (signupData: SignupFormData) => {
      const regex = /\\*[0-9]/;
      if (!signupData.password.match(regex)) {
        return 'auth.form.errors.password.noNumbers';
      }
      return null;
    },
  },
  confirmPassword: {
    equalToPassword: (signupData: SignupFormData) => {
      if (
        signupData.confirmPassword.length === 0 ||
        signupData.password !== signupData.confirmPassword
      ) {
        return 'auth.form.errors.confirmPassowrd.notEqualToPassword';
      }
      return null;
    },
  },
};
