import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { createPersonaTrigger } from '../../../persona/store/actions/createPersona';
import { updatePersonaTrigger } from '../../../persona/store/actions/updatePersona';
import { baseSelector } from '../../store/selectors/baseSelector';
import { Persona } from '../../../persona/store/types/general';
import { PATHS } from '../../../_shared/types/paths';
import { GenericToast } from '../../../_shared/components/GenericToast';

export function useSavePersonaButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const builder = useSelector(baseSelector);
  const { entityId, pageSettings, title } = builder;
  const gridItems = builder.byId;

  const savePersona = () => {
    const isCreating = entityId === '';
    const newPersona: Persona = {
      id: Date.now().toString(),
      src: 'New Persona',
      builderData: {
        gridItems,
        pageSettings,
      },
      title,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    if (isCreating) {
      console.log('CREATE NEW PERSONA');
      dispatch(createPersonaTrigger(newPersona));
      navigate(`/${PATHS.PERSONAS}/${newPersona.id}/edit`);
    } else {
      console.log('UPDATE EXISTING PERSONA');
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
