// TODO - This function is only needed to simulate an error to check if the proper toast is shown, and it is going to be removed.

export const someAsyncOperation = (throwError = false, delay = 1000): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (throwError) {
        reject('Mocked error');
      }

      resolve();

    }, delay);
  });
};
