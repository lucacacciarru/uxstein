import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { AddTab } from '../AddTab/AddTab';
import { EditTab } from '../EditTab/EditTab';
import { stackContainerBaseProps } from './styles/toolBarStylingProps';

export const ToolBar: FC = () => {
  return (
    <VStack {...stackContainerBaseProps}>
      <Tabs variant="soft-rounded" w={'full'}>
        <TabList placeContent={'center'}>
          <Tab>Add</Tab>
          <Tab>Edit</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AddTab />
          </TabPanel>
          <TabPanel>
            <EditTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
