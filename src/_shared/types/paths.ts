export enum PATHS {
  INDEX = '/',
  FAQ = 'faq',
  ABOUT = 'about',
  LOGIN = 'login',
  SIGNUP = 'signup',
  PROFILE = 'profile',
  PERSONAS = 'my-personas',
  TEMPLATES = 'my-templates',
  EDIT_ENTITY = ':entityId/edit',
  CREATE_ENTITY = 'create',
}

export const pathsWithHidedNavigation = [
  PATHS.EDIT_ENTITY,
  PATHS.CREATE_ENTITY,
];
