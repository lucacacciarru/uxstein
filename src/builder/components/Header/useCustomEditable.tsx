import { useToast, UseToastOptions } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updatePersonaTrigger } from '../../../persona/store/actions/updatePersona';
import { getPersonaById } from '../../../persona/store/selectors/getPersonaById';
import { Persona } from '../../../persona/store/types/general';

const DEFAULT_NAME = 'untilted';
const MAX_NAME_CHARS = 20;
const TOAST_ID = '1';
const TOAST_TITLE = 'builder.toast.maxCharacters';
const ERROR_TOAST: UseToastOptions = {
  id: TOAST_ID,
  title: '',
  status: 'error',
  variant: 'left-accent',
  position: 'bottom',
  duration: 2000,
};

export const useCustomEditable = () => {
  const dispatch = useDispatch();
  const { personaId } = useParams();

  const persona: Persona | undefined = useSelector(
    getPersonaById(personaId || ''),
  );
  const title = persona?.title || DEFAULT_NAME;
  const [fileName, setFileName] = useState(title);

  const { t } = useTranslation();
  const errorToast = useToast({
    ...ERROR_TOAST,
    title: t(TOAST_TITLE),
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
    dispatch(
      updatePersonaTrigger({
        id: personaId || '',
        properties: { title: newFileName },
      }),
    );
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
