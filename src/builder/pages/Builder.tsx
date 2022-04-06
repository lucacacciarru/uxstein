import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { ToolBar } from '../components';
import { DroppablePage } from '../components/DroppablePage/DroppablePage';
import { Header } from '../components/Header/Header';
import { useBlockSetup } from '../hooks/useBlockSetup';
import { useResetBuilder } from '../hooks/useResetBuilder';

export const Builder: FC = () => {
  const { blockSetup, setBlockSetup } = useBlockSetup();
  useResetBuilder();

  return (
    <Box w={'full'}>
      <ToolBar setBlockSetup={setBlockSetup} />
      <Header />
      <DroppablePage blockSetup={blockSetup} />
    </Box>
  );
};
