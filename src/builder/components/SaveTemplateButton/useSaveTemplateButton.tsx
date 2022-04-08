import { Template } from '../../../template/store/types/general';
import { useDispatch, useSelector } from 'react-redux';
import { baseSelector } from '../../store/selectors/baseSelector';
import { createTemplateTrigger } from '../../../template/store/actions/createTemplate';
import { getPersonaById } from '../../../persona/store/selectors/getPersonaById';

export function useSaveTemplateButton() {
  const dispatch = useDispatch();
  const builder = useSelector(baseSelector);
  const personaId = builder.personaId;
  const persona = useSelector(getPersonaById(personaId));

  const saveTemplate = (templateName: string) => {
    const newTemplate: Template = {
      id: Date.now().toString(),
      src: persona.src,
      name: templateName,
      isDefault: false,
      builderData: {
        ...persona.builderData,
      },
    };

    dispatch(createTemplateTrigger(newTemplate));
  };

  return { saveTemplate };
}
