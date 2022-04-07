import { useDispatch, useSelector } from 'react-redux';
import { useLoading } from '../../_shared/store/loading';
import { LoadingKeys } from '../../_shared/store/loading/types';
import { deleteTemplateTrigger } from '../store/actions/deleteTemplate';
import { fetchTemplatesTrigger } from '../store/actions/fetchTemplates';
import { updateTemplateTrigger } from '../store/actions/updateTemplate';
import { createTemplateTrigger } from '../store/actions/createTemplate';
import { getTemplates } from '../store/selectors/getTemplates';
import { Template } from '../store/types/general';

export function useTemplate() {
  const dispatch = useDispatch();
  const templates = useSelector(getTemplates);

  const { isLoading } = useLoading(LoadingKeys.template);

  const fetchTemplateList = () => {
    dispatch(fetchTemplatesTrigger());
  };

  const deleteTemplate = (id: string) => {
    dispatch(deleteTemplateTrigger({ id }));
  };

  const updateTemplate = (
    id: string,
    properties: Omit<Partial<Template>, 'id'>,
  ) => {
    dispatch(updateTemplateTrigger({ id, properties }));
  };

  const createTemplate = (template: Template) =>
    dispatch(createTemplateTrigger(template));

  return {
    templates,
    isLoading,
    fetchTemplateList,
    deleteTemplate,
    updateTemplate,
    createTemplate,
  };
}
