import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { GenericToast } from '../../_shared/components/GenericToast';
import { TranslationKey } from '../../_shared/types/i18n';

type Params = {
  toastText: TranslationKey;
};

export function useProfileInput({ toastText }: Params) {
  const toast = useToast();

  const [inputValue, setInputValue] = useState<Record<string, string>>({});
  const [inputError, setInputError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const showToast = () => {
    toast({
      render: () => (
        <GenericToast
          status="success"
          translationKey={toastText}
          data-testid="genericToast"
        />
      ),
    });
  };

  return {
    inputError,
    errorMessage,
    onChange,
    showToast,
    setErrorMessage,
    inputValue,
    setInputError,
  };
}
