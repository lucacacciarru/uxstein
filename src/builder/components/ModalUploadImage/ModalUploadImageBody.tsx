import {
  Box,
  FormControl,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { UploadImageBox } from '../ImageFieldAttribute/UploadImageBox';

export const ModalUploadImageBody: FC = props => {
  const { t } = useTranslation();

  const tabPanelProps = useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      h: 'full',
    }),
    [],
  );

  return (
    <Tabs align="center" defaultIndex={1}>
      <TabList>
        <Tab>{t('builder.toolBar.attributes.image.modalUploadTab')}</Tab>
        <Tab>{t('builder.toolBar.attributes.image.modalUrlTab')}</Tab>
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
