import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { createTemplateTrigger } from '../../../template/store/actions/createTemplate';
import { updateTemplateTrigger } from '../../../template/store/actions/updateTemplate';
import { baseSelector } from '../../store/selectors/baseSelector';
import { Template } from '../../../template/store/types/general';
import { GenericToast } from '../../../_shared/components/GenericToast';
import { TEMP_ID } from '../../../_shared/utils';

export function useSaveTemplateButton() {
  const dispatch = useDispatch();
  const toast = useToast();
  const builder = useSelector(baseSelector);
  const { entityId, pageSettings, title } = builder;
  const gridItems = builder.byId;

  const saveTemplate = () => {
    const isCreating = entityId === '';
    const newTemplate: Template = {
      id: TEMP_ID,
      src: '',
      builderData: {
        gridItems,
        pageSettings,
      },
      name: 'New Template',
      isDefault: false,
    };

    if (isCreating) {
      dispatch(createTemplateTrigger(newTemplate));
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
