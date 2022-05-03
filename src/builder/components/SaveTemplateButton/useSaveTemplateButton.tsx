import { useDispatch, useSelector } from 'react-redux';
import { createTemplateTrigger } from '../../../template/store/actions/createTemplate';
import { updateTemplateTrigger } from '../../../template/store/actions/updateTemplate';
import { baseSelector } from '../../store/selectors/baseSelector';
import { Template } from '../../../template/store/types/general';
import { TEMP_ID } from '../../../_shared/constants';

export function useSaveTemplateButton() {
  const dispatch = useDispatch();
  const builder = useSelector(baseSelector);
  const { entityId, pageSettings, title, globalStyle } = builder;
  const gridItems = builder.byId;

  const saveTemplate = () => {
    const isCreating = entityId === '';
    const newTemplate: Template = {
      id: TEMP_ID,
      src: '',
      builderData: {
        gridItems,
        pageSettings,
        globalStyle,
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
            builderData: { gridItems, pageSettings, globalStyle },
            name: title,
          },
        }),
      );
    }
  };
  return { saveTemplate };
}
