import { ChakraProvider } from '@chakra-ui/react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { customTheme } from '../theme';

type Props = {
  store: EnhancedStore;
  initialRoutes?: string[];
};

export const TestWrapper: FC<Props> = ({
  children,
  store,
  initialRoutes = ['/'],
}) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Router initialEntries={initialRoutes}>{children}</Router>
      </ChakraProvider>
    </Provider>
  );
};
