import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../_shared/types/paths';
import { populateBuilderFromTemplateTrigger } from '../../store/actions/populateBuilderFromTemplate';

export const useTemplatePreviewModal = (templateId: string) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const primaryActionLabel = t('template.modal.createPersona');
    const secondaryActionLabel = t('template.modal.close');

    const pathLink = `/${PATHS.PERSONAS}/${PATHS.CREATE_PERSONA}`;
    const handleCreatePersona = () => {
        dispatch(populateBuilderFromTemplateTrigger({ templateId }));
        navigate(pathLink, { replace: false });
    };

    const imageActionModalProps = {
        primaryAction: handleCreatePersona,
        primaryActionLabel,
        secondaryActionLabel,
        fallbackSrc: "logo512.png"
    }

    return {
        imageActionModalProps
    }
}