export const checkPassword = (password: string, remotePassword: string) => {
  if (remotePassword && remotePassword === password) {
    return true;
  }
};
