export enum PATHS {
    INDEX = '/',
    LOGIN = 'login',
    SIGNUP = 'signup',
    PROFILE = 'profile',
    PERSONAS = 'my-personas',
    TEMPLATES = 'my-templates',
    EDIT_PERSONA = ':personaId/edit',
    CREATE_PERSONA = 'create',
    EDIT_TEMPLATE = ':templateId/edit'
}

export const pathsWithHidedNavigation = [
    PATHS.EDIT_PERSONA,
    PATHS.CREATE_PERSONA
]
