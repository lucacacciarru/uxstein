import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './_shared/theme';
import { Provider } from 'react-redux';
import { store } from './_shared/store/configureStore';
import '@fontsource/nunito';
import '@fontsource/lato';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={customTheme}>
				<App />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
