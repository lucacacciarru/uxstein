import { useToast, UseToastOptions } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DEFAULT_NAME = 'untilted';
const MAX_NAME_CHARS = 20;
const TOAST_ID = '1';
const ERROR_TOAST: UseToastOptions = {
  id: TOAST_ID,
  title: '',
  status: 'error',
  variant: 'left-accent',
  position: 'bottom',
  duration: 2000,
};

export const useCustomEditable = (id?: string) => {
  const name = getNameById(id) || DEFAULT_NAME;
  const [fileName, setFileName] = useState(name);

  const { t } = useTranslation();
  const errorToast = useToast({
    ...ERROR_TOAST,
    title: t('app.toast.maxCharacters'),
  });

  const onChange = (newFileName: string) => {
    const trimmed = newFileName.trim();

    if (trimmed.length < MAX_NAME_CHARS) {
      setFileName(trimmed);
      return;
    }
    if (!errorToast.isActive(TOAST_ID)) {
      errorToast();
    }
  };

  const onSubmit = (submittedFileName: string) => {
    const newFileName =
      submittedFileName.length === 0 ? 'untilted' : submittedFileName;

    setFileName(newFileName);
    // dispatch to store {newFileName} for preventing undefined dispatch
  };

  return {
    editableProps: {
      defaultValue: fileName,
      onChange: onChange,
      onSubmit: onSubmit,
      value: fileName,
    },
  };
};

// this function  return file name (if exist) or undefined (if not)
const getNameById = (id?: string) => undefined;
