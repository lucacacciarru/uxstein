import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './_shared/theme';
import '@fontsource/nunito';
import '@fontsource/lato';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={customTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
