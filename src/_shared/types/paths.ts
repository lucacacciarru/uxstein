export enum PATHS {
    INDEX = '/',
    LOGIN = 'login',
    SIGNUP = 'signup',
    PROFILE = 'profile',
    PERSONAS = 'my-personas',
    TEMPLATES = 'my-templates',
    EDIT_ENTITY = ':entityId/edit',
    CREATE_PERSONA = 'create'
}

export const pathsWithHidedNavigation = [
    PATHS.EDIT_ENTITY,
    PATHS.CREATE_PERSONA
]
