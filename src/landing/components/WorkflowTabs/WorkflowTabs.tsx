import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FC } from 'react';
import { useWorkflowTabs } from './useWorkflowTabs';
import { WorkflowTabPanel } from './WorkflowTabPanel';

export const WorkflowTabs: FC = () => {
  const { align, buttonLabels, tabPanelProps, handleOnChange, tabButtonsRefs } =
    useWorkflowTabs();

  return (
    <Tabs
      align={align}
      pt="8"
      borderBottomColor="transparent"
      onChange={handleOnChange}
    >
      <TabList
        maxW={{ base: '120vw', lg: '100vw' }}
        px="6"
        overflowX={{ base: 'scroll', md: 'hidden' }}
        overflowY="hidden"
        pb="2"
      >
        <Tab ref={tabButtonsRefs[0]}>{buttonLabels.dashboard}</Tab>
        <Tab ref={tabButtonsRefs[1]}>{buttonLabels.template}</Tab>
        <Tab ref={tabButtonsRefs[2]}>{buttonLabels.edit}</Tab>
        <Tab ref={tabButtonsRefs[3]}>{buttonLabels.save}</Tab>
        <Tab ref={tabButtonsRefs[4]}>{buttonLabels.share}</Tab>
      </TabList>

      <TabPanels textAlign="left">
        <TabPanel>
          <WorkflowTabPanel {...tabPanelProps.dashboard} />
        </TabPanel>

        <TabPanel>
          <WorkflowTabPanel {...tabPanelProps.template} />
        </TabPanel>

        <TabPanel>
          <WorkflowTabPanel {...tabPanelProps.edit} />
        </TabPanel>

        <TabPanel>
          <WorkflowTabPanel {...tabPanelProps.save} />
        </TabPanel>

        <TabPanel>
          <WorkflowTabPanel {...tabPanelProps.share} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
