import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { BlockSetup } from '../../hooks/useBlockSetup';
import { AddTab } from '../AddTab/AddTab';
import { EditTab } from '../EditTab/EditTab';
import { stackContainerBaseProps } from './toolBarStylingProps';
import { useToolBar } from './useToolBar';

type Props = {
  setBlockSetup: React.Dispatch<React.SetStateAction<BlockSetup>>;
};

export const ToolBar: FC<Props> = ({ setBlockSetup }) => {
  const {
    addTabLabel,
    editTabLabel,
    selectedBlockId,
    selectedIndex,
    clearSelection,
  } = useToolBar();

  return (
    <VStack {...stackContainerBaseProps}>
      <Tabs variant="soft-rounded" w={'full'} index={selectedIndex}>
        <TabList placeContent={'center'}>
          <Tab onClick={clearSelection}>{addTabLabel}</Tab>
          <Tab isDisabled={!selectedBlockId}>{editTabLabel}</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AddTab setBlockSetup={setBlockSetup} />
          </TabPanel>
          <TabPanel>
            <EditTab selectedBlockId={selectedBlockId} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
