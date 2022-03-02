import { LoginFormData } from '../components';
import { checkLoginMap } from './checkLoginMap';

describe('checkLoginMap function', () => {
  test('if email is not valid, response function should be string (error)', () => {
    const mockFormData: LoginFormData = {
      email: 'test',
      password: '',
    };
    const response = checkLoginMap.email.isEmail(mockFormData);
    expect(response).toBeTruthy();
  });
  test('if email is valid, response function should be null', () => {
    const mockFormData: LoginFormData = {
      email: 'test@test.com',
      password: '',
    };
    const response = checkLoginMap.email.isEmail(mockFormData);
    expect(response).toBeFalsy();
  });
  test('if password length is smaller than 6, response function should be string (error)', () => {
    const mockFormData: LoginFormData = {
      email: '',
      password: 'test',
    };
    const response = checkLoginMap.password.isRightLenght(mockFormData);
    expect(response).toBeTruthy();
  });
  test('if password match, response function should be null', () => {
    const mockFormData: LoginFormData = {
      email: '',
      password: 'Test1234',
    };
    const response = checkLoginMap.password.isRightLenght(mockFormData);
    expect(response).toBeFalsy();
  });
});
