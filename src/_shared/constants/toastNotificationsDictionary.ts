import { FETCH_TEMPLATES_ACTION_TYPES } from '../../template/store/types/fetchTemplates';
import { CREATE_TEMPLATE_ACTION_TYPES } from '../../template/store/types/createTemplate';
import { UPDATE_TEMPLATE_ACTION_TYPES } from '../../template/store/types/updateTemplate';
import { DELETE_TEMPLATE_ACTION_TYPES } from '../../template/store/types/deleteTemplate';
import { FETCH_PERSONAS_ACTION_TYPES } from '../../persona/store/types/fetchPersonas';
import { CREATE_PERSONA_ACTION_TYPES } from '../../persona/store/types/createPersona';
import { UPDATE_PERSONA_ACTION_TYPES } from '../../persona/store/types/updatePersona';
import { DELETE_PERSONA_ACTION_TYPES } from '../../persona/store/types/deletePersona';
import { ToastStatus } from '../components/GenericToast';
import { TranslationKey } from '../types/i18n';
import { UPDATE_PROFILE_ACTION_TYPE } from '../../auth/store/types/updateProfile';

export type ToastNotificationsType = ToastStatus;
export type ToastNotificationsDictionary = Record<
  string,
  { message: TranslationKey; type?: ToastNotificationsType }
>;

export const TOAST_NOTIFICATIONS_DICTIONARY: ToastNotificationsDictionary = {
  [FETCH_TEMPLATES_ACTION_TYPES.FAILURE]: {
    message: 'template.toast.fetchTemplatesFailure',
    type: 'error',
  },
  [CREATE_TEMPLATE_ACTION_TYPES.TRIGGER]: {
    message: 'template.toast.createTemplateTrigger',
    type: 'info',
  },
  [CREATE_TEMPLATE_ACTION_TYPES.SUCCESS]: {
    message: 'template.toast.createTemplateSuccess',
    type: 'success',
  },
  [CREATE_TEMPLATE_ACTION_TYPES.FAILURE]: {
    message: 'template.toast.createTemplateFailure',
    type: 'error',
  },
  [UPDATE_TEMPLATE_ACTION_TYPES.TRIGGER]: {
    message: 'template.toast.updateTemplateTrigger',
    type: 'info',
  },
  [UPDATE_TEMPLATE_ACTION_TYPES.SUCCESS]: {
    message: 'template.toast.updateTemplateSuccess',
    type: 'success',
  },
  [UPDATE_TEMPLATE_ACTION_TYPES.FAILURE]: {
    message: 'template.toast.updateTemplateFailure',
    type: 'error',
  },
  [DELETE_TEMPLATE_ACTION_TYPES.TRIGGER]: {
    message: 'template.toast.deleteTemplateTrigger',
    type: 'info',
  },
  [DELETE_TEMPLATE_ACTION_TYPES.SUCCESS]: {
    message: 'template.toast.deleteTemplateSuccess',
    type: 'success',
  },
  [DELETE_TEMPLATE_ACTION_TYPES.FAILURE]: {
    message: 'template.toast.deleteTemplateFailure',
    type: 'error',
  },

  [FETCH_PERSONAS_ACTION_TYPES.FAILURE]: {
    message: 'persona.toast.fetchPersonasFailure',
    type: 'error',
  },
  [CREATE_PERSONA_ACTION_TYPES.TRIGGER]: {
    message: 'persona.toast.createPersonaTrigger',
    type: 'info',
  },
  [CREATE_PERSONA_ACTION_TYPES.SUCCESS]: {
    message: 'persona.toast.createPersonaSuccess',
    type: 'success',
  },
  [CREATE_PERSONA_ACTION_TYPES.FAILURE]: {
    message: 'persona.toast.createPersonaFailure',
    type: 'error',
  },
  [UPDATE_PERSONA_ACTION_TYPES.TRIGGER]: {
    message: 'persona.toast.updatePersonaTrigger',
    type: 'info',
  },
  [UPDATE_PERSONA_ACTION_TYPES.SUCCESS]: {
    message: 'persona.toast.updatePersonaSuccess',
    type: 'success',
  },
  [UPDATE_PERSONA_ACTION_TYPES.FAILURE]: {
    message: 'persona.toast.updatePersonaFailure',
    type: 'error',
  },
  [DELETE_PERSONA_ACTION_TYPES.TRIGGER]: {
    message: 'persona.toast.deletePersonaTrigger',
    type: 'info',
  },
  [DELETE_PERSONA_ACTION_TYPES.SUCCESS]: {
    message: 'persona.toast.deletePersonaSuccess',
    type: 'success',
  },
  [DELETE_PERSONA_ACTION_TYPES.FAILURE]: {
    message: 'persona.toast.deletePersonaFailure',
    type: 'error',
  },

  [UPDATE_PROFILE_ACTION_TYPE.FAILURE]: {
    message: 'auth.toast.updateProfileFailure',
    type: 'error',
  },
  [UPDATE_PROFILE_ACTION_TYPE.TRIGGER]: {
    message: 'auth.toast.updateProfileTrigger',
    type: 'info',
  },
  [UPDATE_PROFILE_ACTION_TYPE.SUCCESS]: {
    message: 'auth.toast.updateProfileSuccess',
    type: 'success',
  },
};
