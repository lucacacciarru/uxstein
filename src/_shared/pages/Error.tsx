import { Box, Button, Center } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components';

export const ErrorPage: FC = () => {
  return (
    <Center h="90vh" w="100vw">
      <Box textAlign="center">
        <Icon name="Error" size="44" />
        <h1>Oops! Something goes wrong</h1>
        <h3>nothing to see here...</h3>
        <Link to="/">
          <Button mt="4">Back to home</Button>
        </Link>
      </Box>
    </Center>
  );
};
