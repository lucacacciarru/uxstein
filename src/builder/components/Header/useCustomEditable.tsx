import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { GenericToast } from '../../../_shared/components/GenericToast';
import { updateBuilder } from '../../store/actions/update';
import { baseSelector } from '../../store/selectors/baseSelector';

const MAX_NAME_CHARS = 20;
const TOAST_ID = '1';
const TOAST_TITLE = 'builder.toast.maxCharacters';

export const useCustomEditable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const DEFAULT_NAME = t('builder.header.defaultFileName');

  const title = useSelector(baseSelector).title || DEFAULT_NAME;
  const [fileName, setFileName] = useState(title);

  const errorToast = useToast({
    duration: 2000,
    render: () => <GenericToast status="error" translationKey={TOAST_TITLE} />,
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
      submittedFileName.length === 0 ? DEFAULT_NAME : submittedFileName;

    setFileName(newFileName);
    dispatch(updateBuilder({ title: newFileName }));
  };

  useEffect(() => {
    setFileName(title);
  }, [title]);

  return {
    editableProps: {
      defaultValue: fileName,
      onChange: onChange,
      onSubmit: onSubmit,
      value: fileName,
    },
  };
};
