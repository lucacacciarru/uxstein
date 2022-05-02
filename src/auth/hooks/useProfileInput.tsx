import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../store/selectors';

type UserAttributes = {
  username: string;
  oldPassword: string;
  email: string;
  newPassword: string;
};
export function useProfileInput() {
  const id = useSelector(getUserProfile)?.id as string;

  const [inputValue, setInputValue] = useState<UserAttributes>({
    email: '',
    newPassword: '',
    oldPassword: '',
    username: '',
  });
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetSpecificValue = (attribute: keyof UserAttributes) => {
    setInputValue(prev => ({ ...prev, [attribute]: '' }));
  };

  return {
    inputError,
    errorMessage,
    onChange,
    setErrorMessage,
    inputValue,
    setInputError,
    id,
    resetSpecificValue,
    setInputValue,
  };
}
