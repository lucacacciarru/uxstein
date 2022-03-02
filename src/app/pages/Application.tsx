import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { ToolBar } from '../components';
import { Header } from '../components/Header/Header';

export const Application: FC = () => {
  return (
    <>
      <ToolBar />
      <Stack w="full">
        <Header />
        <Text as="h1" textStyle="h1">
          Builder
        </Text>
      </Stack>
    </>
  );
};
