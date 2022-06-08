import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './_shared/theme';
import { Provider } from 'react-redux';
import { store } from './_shared/store/configureStore';
import '@fontsource/nunito';
import '@fontsource/lato';
import { CustomRouter } from './_shared/components/CustomRouter/CustomRouter';
import { getHistory } from './_shared/utils';

const history = getHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <CustomRouter history={history}>
          <App />
        </CustomRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
