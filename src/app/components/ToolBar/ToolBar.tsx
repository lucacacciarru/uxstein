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
import { useSeletedBlock } from '../../hooks/useSelectedBlock';
import { AddTab } from '../AddTab/AddTab';
import { EditTab } from '../EditTab/EditTab';
import { stackContainerBaseProps } from './styles/toolBarStylingProps';

type Props = {
  setBlockSetup: React.Dispatch<React.SetStateAction<BlockSetup>>;
};

export const ToolBar: FC<Props> = ({ setBlockSetup }) => {
  const { clearSelection, selectedBlockId } = useSeletedBlock();
  const selectedIndex = selectedBlockId ? 1 : 0;

  return (
    <VStack {...stackContainerBaseProps}>
      <Tabs variant="soft-rounded" w={'full'} index={selectedIndex}>
        <TabList placeContent={'center'}>
          <Tab onClick={clearSelection}>Add</Tab>
          <Tab isDisabled={!selectedBlockId}>Edit</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AddTab setBlockSetup={setBlockSetup} />
          </TabPanel>
          <TabPanel>
            <EditTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
