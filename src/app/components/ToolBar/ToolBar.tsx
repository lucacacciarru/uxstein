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
import { stackContainerBaseProps } from './styles/toolBarStylingProps';

type Props = {
  setBlockSetup: React.Dispatch<React.SetStateAction<BlockSetup>>;
};

export const ToolBar: FC<Props> = ({ setBlockSetup }) => {
  return (
    <VStack {...stackContainerBaseProps}>
      <Tabs variant="soft-rounded" w={'full'}>
        <TabList placeContent={'center'}>
          <Tab>Add</Tab>
          <Tab>Edit</Tab>
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
