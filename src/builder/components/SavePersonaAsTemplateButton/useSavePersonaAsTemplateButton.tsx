import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { baseSelector } from '../../store/selectors/baseSelector';
import { Template } from '../../../template/store/types/general';
import { createTemplateTrigger } from '../../../template/store/actions/createTemplate';
import { PATHS } from '../../../_shared/types/paths';

export function useSavePersonaAsTemplateButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const builder = useSelector(baseSelector);
  const { pageSettings } = builder;
  const gridItems = builder.byId;

  const savePersonaAsTemplate = (templateName: string) => {
    const newTemplateId = Date.now().toString();

    const newTemplate: Template = {
      id: newTemplateId,
      src: '',
      name: templateName,
      isDefault: false,
      builderData: {
        gridItems,
        pageSettings,
      },
    };

    dispatch(createTemplateTrigger(newTemplate));
    navigate(`/${PATHS.TEMPLATES}/${newTemplateId}/edit`);
  };

  return { savePersonaAsTemplate };
}
