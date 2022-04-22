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
