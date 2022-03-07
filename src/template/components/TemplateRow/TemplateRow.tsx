//TODO: change "Frank" to username of User
import { Box, BoxProps, HStack, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PersonCard } from '../../../_shared/components';
import { mockTemplate } from '../..//utils/mockTemplate';
import { ControlButton } from './ControlButton';

type Props = {
  category: 'mine' | 'default';
};

const containerProps: BoxProps = {
  transition: 'all .2s ease',
  transform: 'auto',
  mt: '4',
  gap: '5',
};

export const TemplateRow: React.FC<Props> = ({ category }) => {
  const [carouselX, setCarouselX] = useState<number>(0);
  const { t } = useTranslation();
  const author = category === 'mine' ? 'Frank' : category;
  const filteredByCategory = useMemo(() => {
    return mockTemplate.filter(template => template.author === author);
  }, [author]);

  const renderTemplateByAuthor = useMemo(() => {
    return filteredByCategory.map(template => (
      <PersonCard
        id={Date.now().toString()}
        key={template.createdAt}
        {...template}
      />
    ));
  }, [filteredByCategory]);

  return (
    <Box overflow="hidden" py="4">
      <Text as="h4" textStyle="h4">
        {t(`template.container.category.${category}`)}
      </Text>
      <Box position="relative">
        <HStack translateX={`${carouselX * 350}px`} {...containerProps}>
          {renderTemplateByAuthor}
        </HStack>
        <ControlButton
          setCarouselX={setCarouselX}
          direction="sx"
          disabled={carouselX === 0 ? true : false}
        />
        <ControlButton
          setCarouselX={setCarouselX}
          direction="dx"
          disabled={
            carouselX < (filteredByCategory.length * -1) / 2 ? true : false
          }
        />
      </Box>
    </Box>
  );
};
