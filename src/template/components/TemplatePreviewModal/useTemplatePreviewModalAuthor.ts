import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../../auth/store/selectors';

export const useTemplatePreviewModalAuthor = () => {
    const { t } = useTranslation();

    const defaultTemplate = t('template.modal.defaultTemplate');
    const createdBy = t('template.modal.createdBy');

    const author = useSelector(getUserProfile)?.username;

    return {
        defaultTemplate,
        createdBy,
        author
    }
}