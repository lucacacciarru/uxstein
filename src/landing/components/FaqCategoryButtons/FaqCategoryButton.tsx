import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';
import { FaqCategories } from '../Faq/types';
import { useFaqCategoryButton } from './useFaqCategoryButton';

type Props = {
  cat: FaqCategories;
};

export const FaqCategoryButton: FC<Props> = ({ cat }) => {
  const { handleClick, icon, label, variableProps } = useFaqCategoryButton(cat);

  return (
    <Stack
      role="button"
      justify="center"
      _active={{ border: 'green.s', boxShadow: 'noBlur.green.s' }}
      align="center"
      borderRadius="md"
      boxSize="full"
      w="40"
      h="40"
      onClick={handleClick}
      {...variableProps}
    >
      <Icon name={icon} size="10" />
      <Text>{label}</Text>
    </Stack>
  );
};
