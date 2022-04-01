import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonaTrigger } from '../../../persona/store/actions/updatePersona';
import { Persona } from '../../../persona/store/types/general';
import { GenericToast } from '../../../_shared/components/GenericToast';
import { baseSelector } from '../../store/selectors/baseSelector';

export function useSaveButton() {
  const dispatch = useDispatch();
  const toast = useToast();
  const builder = useSelector(baseSelector);
  const personaId = builder.personaId;
  const gridItems = builder.byId;
  const pageSettings = builder.pageSettings;
  const title = builder.title;

  const savePersona = () => {
    const isCreating = personaId === '';
    const newPersona: Persona = {
      id: Date.now().toString(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      src: '',
      builderData: {
        gridItems,
        pageSettings,
      },
      title,
    };

    if (isCreating) {
      dispatch(
        updatePersonaTrigger({ id: newPersona.id, properties: newPersona }),
      );
    } else {
      dispatch(
        updatePersonaTrigger({
          id: personaId,
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

  return {
    savePersona,
  };
}
