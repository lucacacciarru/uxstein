import { useDispatch, useSelector } from 'react-redux';
import { baseSelector } from '../../store/selectors/baseSelector';
import { Template } from '../../../template/store/types/general';
import { createTemplateTrigger } from '../../../template/store/actions/createTemplate';
import { TEMP_ID } from '../../../_shared/constants';

export function useSavePersonaAsTemplateButton() {
  const dispatch = useDispatch();
  const builder = useSelector(baseSelector);
  const { pageSettings } = builder;
  const gridItems = builder.byId;

  const savePersonaAsTemplate = (templateName: string) => {
    const newTemplate: Template = {
      id: TEMP_ID,
      src: '',
      name: templateName,
      isDefault: false,
      builderData: {
        gridItems,
        pageSettings,
      },
    };

    dispatch(createTemplateTrigger(newTemplate));
  };

  return { savePersonaAsTemplate };
}
