//TODO: change "Frank" to username of User
import { Box, HStack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { ControlButtons } from '../ControlButtons/ControlButtons';
import { TemplateCard } from '../TemplateCard';
import { useTemplateRow } from './useTemplateRow';

type Props = {
  category: 'mine' | 'default';
};

export const TemplateRow: React.FC<Props> = ({ category }) => {
  const {
    title,
    disabled,
    filteredByCategory,
    containerProps,
    containerRef,
    firstCardRef,
    lastCardRef,
  } = useTemplateRow(category);

  const renderTemplateByAuthor = useMemo(() => {
    const showOption = category === 'mine' ? true : false;
    return filteredByCategory.map((template, index, list) => {
      const ref =
        index === 0
          ? firstCardRef
          : index === list.length - 1
          ? lastCardRef
          : undefined;
      return (
        <TemplateCard
          {...template}
          id={Date.now().toString()}
          cardRef={ref}
          type={'template'}
        />
      );
    });
  }, [category, filteredByCategory, firstCardRef, lastCardRef]);

  return (
    <Box overflow="hidden" py="4">
      <Text as="h4" textStyle="h4">
        {title}
      </Text>
      <Box position={'relative'}>
        <HStack {...containerProps} ref={containerRef}>
          {renderTemplateByAuthor}
        </HStack>
        <ControlButtons disabled={disabled} containerRef={containerRef} />
      </Box>
    </Box>
  );
};
