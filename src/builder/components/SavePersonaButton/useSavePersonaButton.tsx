import { useDispatch, useSelector } from 'react-redux';
import { createPersonaTrigger } from '../../../persona/store/actions/createPersona';
import { updatePersonaTrigger } from '../../../persona/store/actions/updatePersona';
import { baseSelector } from '../../store/selectors/baseSelector';
import { Persona } from '../../../persona/store/types/general';
import { TEMP_ID } from '../../../_shared/constants';

export function useSavePersonaButton() {
  const dispatch = useDispatch();
  const builder = useSelector(baseSelector);
  const { entityId, pageSettings, title } = builder;
  const gridItems = builder.byId;

  const savePersona = () => {
    const isCreating = entityId === '';
    const newPersona: Persona = {
      id: TEMP_ID,
      src: '',
      builderData: {
        gridItems,
        pageSettings,
      },
      title: 'New Persona',
      createdAt: 0,
      updatedAt: 0,
    };

    if (isCreating) {
      dispatch(createPersonaTrigger(newPersona));
    } else {
      dispatch(
        updatePersonaTrigger({
          id: entityId,
          properties: { builderData: { gridItems, pageSettings }, title },
        }),
      );
    }
  };

  return { savePersona };
}
