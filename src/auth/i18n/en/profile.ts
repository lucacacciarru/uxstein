export const profile = {
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
  },
  toast: {
    username: 'Username has been changed',
    email: 'Email has been changed',
    password: 'Password has been changed',
  },
};
