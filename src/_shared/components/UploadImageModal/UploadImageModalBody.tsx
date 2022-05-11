import {
  Box,
  FormControl,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { UploadImageBox } from '../UploadImageBox';

const tabPanelProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  h: 'full',
};

export const ModalUploadImageBody: React.FC = props => {
  const { t } = useTranslation();

  return (
    <Tabs align="center" defaultIndex={1}>
      <TabList>
        <Tab>{t('modal.imageModal.modalUploadTab')}</Tab>
        <Tab>{t('modal.imageModal.modalUrlTab')}</Tab>
      </TabList>
      <TabPanels h="40" pt="8">
        <TabPanel {...tabPanelProps}>
          <Box
            w="64"
            h="40"
            borderRadius="sm"
            border="dark.s"
            _hover={{ border: 'green.s' }}
          >
            <UploadImageBox />
          </Box>
        </TabPanel>
        <TabPanel {...tabPanelProps}>
          <FormControl isInvalid={false}>{props.children}</FormControl>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
