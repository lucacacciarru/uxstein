import { Box } from '@chakra-ui/react';
import { ToolBar } from '../components';
import { DroppablePage } from '../components/DroppablePage/DroppablePage';
import { Header } from '../components/Header/Header';
import { useBlockSetup } from '../hooks/useBlockSetup';
import { useResetBuilder } from '../hooks/useResetBuilder';
import { useNavigationTrigger } from '../../_shared/hooks';
import { useSelector } from 'react-redux';
import { baseSelector } from '../store/selectors/baseSelector';
import { useBuilderEntityRouteResolver } from '../hooks/useBuilderEntityRouteResolver';
import { BuilderProvider } from '../components/BuilderContext';

export const Builder: React.FC = () => {
  const { blockSetup, setBlockSetup } = useBlockSetup();
  useResetBuilder();

  const { entityId, entityType } = useSelector(baseSelector);
  const route = useBuilderEntityRouteResolver(entityType, entityId, ['edit']);
  useNavigationTrigger(route, [entityType, entityId]);

  return (
    <BuilderProvider>
      <Box w="full">
        <ToolBar setBlockSetup={setBlockSetup} />
        <Header />
        <DroppablePage blockSetup={blockSetup} />
      </Box>
    </BuilderProvider>
  );
};
