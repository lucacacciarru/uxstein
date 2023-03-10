export const profile = {
  page: {
    title: 'Gestisci il tuo profilo',
    subtitle: 'Cambia le tue informazioni',
  },
  label: {
    username: 'Username',
    email: 'Indirizzo email',
    avatar: 'Avatar',
    oldPassword: 'Password vecchia',
    newPassword: 'Password nuova',
  },
  errors: {
    username: {
      empty: 'Inserisci un username valido',
    },
    email: {
      isNotEmail: 'Inserisci una mail valida',
      equalEmail: 'Inserisci una mail diversa da quella attiva',
    },
    password: {
      equal: 'Non puoi inserire una password uguale a quella che hai già',
      empty: 'Inserisci una password valida',
    },
  },
  avatar: {
    openModalButton: 'Cambia avatar',
    placeholderAvatarInput: 'Inserisci URL',
    confirmButton: 'Aggiorna',
  },
  toast: {
    username: 'Lo username è stato cambiato',
    email: "L'email è stata cambiata",
    password: 'La password è stata cambiata',
  },
};
