import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonaTrigger } from '../../../persona/store/actions/updatePersona';
import { GenericToast } from '../../../_shared/components/GenericToast';
import { getGridItem } from '../../store/selectors/getGridItem';
import { getPageSettings } from '../../store/selectors/getPageSettings';
import { getPersonaId } from '../../store/selectors/getPersonaId';

export function useSaveButton() {
  const dispatch = useDispatch();
  const toast = useToast();
  const personaId = useSelector(getPersonaId());
  const gridItems = useSelector(getGridItem());
  const pageSettings = useSelector(getPageSettings);

  const savePersona = () => {
    dispatch(
      updatePersonaTrigger({
        id: personaId,
        properties: { builderData: { gridItems, pageSettings } },
      }),
    );
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
