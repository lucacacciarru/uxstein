import { LOGIN_ACTION_TYPES } from '../../auth/store';
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

export type ToastNotificationsType = ToastStatus;
export type ToastNotificationsDictionary = Record<string, { message: TranslationKey, type?: ToastNotificationsType }>

export const TOAST_NOTIFICATIONS_DICTIONARY: ToastNotificationsDictionary = {
  [LOGIN_ACTION_TYPES.SUCCESS]: { message: 'auth.toast.loginSuccess', type: 'success' },
  [LOGIN_ACTION_TYPES.FAILURE]: { message: 'auth.toast.loginFailure', type: 'error' },

  [FETCH_TEMPLATES_ACTION_TYPES.FAILURE]: { message: 'template.toast.fetchTemplatesFailure', type: 'error' },
  [CREATE_TEMPLATE_ACTION_TYPES.SUCCESS]: { message: 'template.toast.createTemplateSuccess', type: 'success' },
  [CREATE_TEMPLATE_ACTION_TYPES.FAILURE]: { message: 'template.toast.createTemplateFailure', type: 'error' },
  [UPDATE_TEMPLATE_ACTION_TYPES.SUCCESS]: { message: 'template.toast.updateTemplateSuccess', type: 'success' },
  [UPDATE_TEMPLATE_ACTION_TYPES.FAILURE]: { message: 'template.toast.updateTemplateFailure', type: 'error' },
  [DELETE_TEMPLATE_ACTION_TYPES.SUCCESS]: { message: 'template.toast.deleteTemplateSuccess', type: 'success' },
  [DELETE_TEMPLATE_ACTION_TYPES.FAILURE]: { message: 'template.toast.deleteTemplateFailure', type: 'error' },

  [FETCH_PERSONAS_ACTION_TYPES.FAILURE]: { message: 'persona.toast.fetchPersonasFailure', type: 'error' },
  [CREATE_PERSONA_ACTION_TYPES.SUCCESS]: { message: 'persona.toast.createPersonaSuccess', type: 'success' },
  [CREATE_PERSONA_ACTION_TYPES.FAILURE]: { message: 'persona.toast.createPersonaFailure', type: 'error' },
  [UPDATE_PERSONA_ACTION_TYPES.SUCCESS]: { message: 'persona.toast.updatePersonaSuccess', type: 'success' },
  [UPDATE_PERSONA_ACTION_TYPES.FAILURE]: { message: 'persona.toast.updatePersonaFailure', type: 'error' },
  [DELETE_PERSONA_ACTION_TYPES.SUCCESS]: { message: 'persona.toast.deletePersonaSuccess', type: 'success' },
  [DELETE_PERSONA_ACTION_TYPES.FAILURE]: { message: 'persona.toast.deletePersonaFailure', type: 'error' },
};
