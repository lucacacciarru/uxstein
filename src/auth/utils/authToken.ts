import wretch from 'wretch';

const STORAGE_KEY = 'uxstein/AUTH_TOKEN';

export function getAuthToken() {
  return window.localStorage.getItem(STORAGE_KEY);
}

export function setAuthToken(token: string) {
  window.localStorage.setItem(STORAGE_KEY, token);

  wretch().defaults({
    headers: {
      Authorization: token,
    },
  });
}

export function removeAuthToken() {
  window.localStorage.removeItem(STORAGE_KEY);

  wretch().defaults({
    headers: {
      Authorization: '',
    },
  });
}
