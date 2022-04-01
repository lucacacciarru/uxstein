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
import { useSelectedBlock } from '../../hooks/useSelectedBlock';
import { AddTab } from '../AddTab/AddTab';
import { EditTab } from '../EditTab/EditTab';
import { stackContainerBaseProps } from './toolBarStylingProps';

type Props = {
  setBlockSetup: React.Dispatch<React.SetStateAction<BlockSetup>>;
};

export const ToolBar: FC<Props> = ({ setBlockSetup }) => {
  const { clearSelection, selectedBlockId } = useSelectedBlock();
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
            <EditTab selectedBlockId={selectedBlockId} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
