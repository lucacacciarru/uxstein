export const profile = {
  page: {
    title: 'Handle your profile',
    subtitle: 'Change your profile information and subscription.',
  },
  label: {
    username: 'Username',
    email: 'Email',
    avatar: 'Avatar',
    oldPassword: 'Old password',
    newPassword: 'New password',
  },
  errors: {
    username: {
      empty: 'Enter a valid username',
    },
    email: {
      isNotEmail: 'Enter a valid email',
      equalEmail: 'Enter a different email than the active one',
    },
    password: {
      equal:
        'you cannot enter a password that is the same as the one you already have',
      empty: 'Enter a valid password',
    },
  },
  avatar: {
    openModalButton: 'Change avatar',
    placeholderAvatarInput: 'Type URL',
    confirmButton: 'Update',
  },
  toast: {
    username: 'Username has been changed',
    email: 'Email has been changed',
    password: 'Password has been changed',
  },
};
