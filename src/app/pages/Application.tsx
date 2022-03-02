import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { ToolBar } from '../components';
import { DroppablePage } from '../components/DroppablePage/DroppablePage';
import { Header } from '../components/Header/Header';
import { useBlockSetup } from '../hooks/useBlockSetup';

export const Application: FC = () => {
  const { blockSetup, setBlockSetup } = useBlockSetup();

  return (
    <Box w={'full'}>
      <ToolBar setBlockSetup={setBlockSetup} />
      <Header />
      <DroppablePage blockSetup={blockSetup} />
    </Box>
  );
};
