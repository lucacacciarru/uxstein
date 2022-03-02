import { SignupFormData } from '../components';
import { checkSignupMap } from './checkSignupMap';

describe('checkLoginMap function', () => {
  test('if email is not valid, response function should be string (translation error)', () => {
    const mockFormData: SignupFormData = {
      email: 'test',
      password: '',
      confirmPassword: '',
    };
    const response = checkSignupMap.email.isEmail(mockFormData);
    expect(response).toBeTruthy();
  });

  test('if email is valid, response function should be null', () => {
    const mockFormData: SignupFormData = {
      email: 'test@test.com',
      password: '',
      confirmPassword: '',
    };
    const response = checkSignupMap.email.isEmail(mockFormData);
    expect(response).toBeFalsy();
  });

  test('if password length is smaller than 6, response function should be string (translation error)', () => {
    const mockFormData: SignupFormData = {
      email: '',
      password: 'Test',
      confirmPassword: '',
    };
    const response = checkSignupMap.password.isRightLength(mockFormData);
    expect(response).toBeTruthy();
  });

  test('if password match length , response function should be null', () => {
    const mockFormData: SignupFormData = {
      email: '',
      password: 'TestTestTest',
      confirmPassword: '',
    };
    const response = checkSignupMap.password.isRightLength(mockFormData);
    expect(response).toBeFalsy();
  });

  test('if password does not contain capital letter, response function should be string (translation error)', () => {
    const mockFormData: SignupFormData = {
      email: '',
      password: 'test',
      confirmPassword: '',
    };
    const response = checkSignupMap.password.hasCapitalLetter(mockFormData);
    expect(response).toBeTruthy();
  });

  test('if password contains capital letter, response function should be null', () => {
    const mockFormData: SignupFormData = {
      email: '',
      password: 'Test',
      confirmPassword: '',
    };
    const response = checkSignupMap.password.hasCapitalLetter(mockFormData);
    expect(response).toBeFalsy();
  });

  test('if password does not contain number, response function should be string (translation error)', () => {
    const mockFormData: SignupFormData = {
      email: '',
      password: 'test',
      confirmPassword: '',
    };
    const response = checkSignupMap.password.hasNumber(mockFormData);
    expect(response).toBeTruthy();
  });

  test('if password contains number, response function should be null', () => {
    const mockFormData: SignupFormData = {
      email: '',
      password: 'test1',
      confirmPassword: '',
    };
    const response = checkSignupMap.password.hasNumber(mockFormData);
    expect(response).toBeFalsy();
  });

  test('if confirmPassword is not equal to password, response function should be string (translation error)', () => {
    const mockFormData: SignupFormData = {
      email: '',
      password: 'passwordTest',
      confirmPassword: 'testPassword',
    };
    const response =
      checkSignupMap.confirmPassword.equalToPassword(mockFormData);
    expect(response).toBeTruthy();
  });

  test('if confirmPassword is equal to password, response function should be null', () => {
    const mockFormData: SignupFormData = {
      email: '',
      password: 'passwordTest',
      confirmPassword: 'passwordTest',
    };
    const response =
      checkSignupMap.confirmPassword.equalToPassword(mockFormData);
    expect(response).toBeFalsy();
  });
});
