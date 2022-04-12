import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { createTemplateTrigger } from '../../../template/store/actions/createTemplate';
import { updateTemplateTrigger } from '../../../template/store/actions/updateTemplate';
import { baseSelector } from '../../store/selectors/baseSelector';
import { Template } from '../../../template/store/types/general';
import { PATHS } from '../../../_shared/types/paths';
import { GenericToast } from '../../../_shared/components/GenericToast';

export function useSaveTemplateButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const builder = useSelector(baseSelector);
  const { entityId, pageSettings, title } = builder;
  const gridItems = builder.byId;

  const saveTemplate = () => {
    const isCreating = entityId === '';
    const newTemplate: Template = {
      id: Date.now().toString(),
      src: 'New Template',
      builderData: {
        gridItems,
        pageSettings,
      },
      name: title,
      isDefault: false,
    };

    if (isCreating) {
      dispatch(createTemplateTrigger(newTemplate));
      navigate(`/${PATHS.TEMPLATES}/${newTemplate.id}/edit`);
    } else {
      dispatch(
        updateTemplateTrigger({
          id: entityId,
          properties: {
            builderData: { gridItems, pageSettings },
            name: title,
          },
        }),
      );
    }

    toast({
      render: () => (
        <GenericToast
          status="success"
          translationKey="builder.toast.templateSaved"
        />
      ),
    });
  };
  return { saveTemplate };
}
