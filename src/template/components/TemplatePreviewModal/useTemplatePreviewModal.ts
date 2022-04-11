import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../_shared/types/paths';
import { populateBuilderTrigger } from '../../../builder/store/actions/populate';
import { BuilderEntityType } from '../../../builder/store/types';

export const useTemplatePreviewModal = (templateId: string) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const primaryActionLabel = t('template.modal.createPersona');
  const secondaryActionLabel = t('template.modal.edit');

  const handleAction = (navigationPath: string, entityType: BuilderEntityType) => {
    dispatch(populateBuilderTrigger({ entityId: templateId, entityType }));
    navigate(navigationPath, { replace: false });
  };

  const createPersonaPath = `/${PATHS.PERSONAS}/${PATHS.CREATE_PERSONA}`;
  const editTemplatePath = `/${PATHS.TEMPLATES}/${templateId}/edit`;

  const handleCreatePersona = () => handleAction(createPersonaPath, 'persona');
  const handleEditTemplate = () => handleAction(editTemplatePath, 'template');

  const imageActionModalProps = {
    primaryAction: handleCreatePersona,
    primaryActionLabel,
    secondaryAction: handleEditTemplate,
    secondaryActionLabel,
    fallbackSrc: 'logo512.png',
  };

  return {
    imageActionModalProps,
  };
};
