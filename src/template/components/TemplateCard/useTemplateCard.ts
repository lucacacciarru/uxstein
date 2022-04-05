import { useDispatch } from 'react-redux';
import { PATHS } from '../../../_shared/types/paths';
import { populateBuilderFromTemplateTrigger } from '../../store/actions/populateBuilderFromTemplate';

export const useTemplateCard = (templateId: string) => {
    const dispatch = useDispatch();
    const handleCreatePersona = () => {
        dispatch(populateBuilderFromTemplateTrigger({ templateId }));
    };

    const pathLink = `/${PATHS.PERSONAS}/${PATHS.CREATE_PERSONA}`;

    return {
        handleCreatePersona,
        pathLink
    }
}