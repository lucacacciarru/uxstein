import { createBrowserHistory, BrowserHistory } from 'history';

function createGetHistory() {
  let history: BrowserHistory;
  return () => {
    if (history) {
      return history;
    }

    history = createBrowserHistory();
    return history;
  };
}

export const getHistory = createGetHistory();
