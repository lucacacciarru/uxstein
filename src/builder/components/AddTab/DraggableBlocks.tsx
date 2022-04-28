import { Center, Stack, Wrap } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CollapsableItem } from '../../../_shared/components/Collapsable';
import { SearchBar } from '../../../_shared/components/SearchBar';

export const DraggableBlocks: FC = ({ children }) => {
  const { t } = useTranslation();
  return (
    <CollapsableItem
      name={t('builder.toolBar.general.blocks')}
      accordtionPanelProps={{ px: '0', pb: '8' }}
    >
      <Stack spacing="8">
        <SearchBar />
        <Center>
          <Wrap margin="0" spacing="4">
            {children}
          </Wrap>
        </Center>
      </Stack>
    </CollapsableItem>
  );
};
