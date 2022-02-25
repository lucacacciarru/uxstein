import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { ToolBar } from '../components';
import { Header } from '../components/Header/Header';

export const Application: FC = () => {
  return (
    <>
      <ToolBar />
      <Stack w="full">
        <Header />
        <h1>Builder</h1>
      </Stack>
    </>
  );
};
