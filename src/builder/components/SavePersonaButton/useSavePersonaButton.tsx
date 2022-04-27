import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { createPersonaTrigger } from '../../../persona/store/actions/createPersona';
import { updatePersonaTrigger } from '../../../persona/store/actions/updatePersona';
import { baseSelector } from '../../store/selectors/baseSelector';
import { Persona } from '../../../persona/store/types/general';
import { GenericToast } from '../../../_shared/components/GenericToast';
import { TEMP_ID } from '../../../_shared/constants';

export function useSavePersonaButton() {
  const dispatch = useDispatch();
  const toast = useToast();
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

    toast({
      render: () => (
        <GenericToast
          status="success"
          translationKey="builder.toast.personaSaved"
        />
      ),
    });
  };

  return { savePersona };
}
