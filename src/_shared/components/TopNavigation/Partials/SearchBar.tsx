import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../Icon/Icon';

export const SearchBar: FC = () => {
  const { t } = useTranslation();
  return (
    <InputGroup w="80">
      <Input placeholder={t('navigation.searchBar.placeholder')} />
      <InputRightElement
        children={<Icon name="Search" color="black.50" />}
        pr="2"
      />
    </InputGroup>
  );
};
