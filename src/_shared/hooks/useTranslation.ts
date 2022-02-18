export const translations = {
  homepage: {
    title: 'test',
  },
  login: {
    message: 'franco',
    info: {
      foodbar: 'bar',
    },
  },
};

type Translations = typeof translations;

type KeyOfT<T extends Record<string, any>> = keyof T;

type Translation = KeyOfT<Translations>;
