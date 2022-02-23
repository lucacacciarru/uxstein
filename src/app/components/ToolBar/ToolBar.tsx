import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { stackContainerBaseProps } from './styles/toolBarStylingProps';

export const ToolBar: FC = () => {
  return (
    <VStack {...stackContainerBaseProps}>
      <Tabs variant="soft-rounded">
        <TabList>
          <Tab>Add</Tab>
          <Tab>Edit</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>Aggiungi</TabPanel>
          <TabPanel>Edita</TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
