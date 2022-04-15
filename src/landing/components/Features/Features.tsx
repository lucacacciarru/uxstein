import { HStack, Stack, Text } from '@chakra-ui/react';
import { SectionWrapper } from '../SectionWrapper';
import { useFeatures } from './useFeatures';

export const Features = () => {
  const { renderFeatures, title, sectionStyle, cardContainerStyle } =
    useFeatures();
  return (
    <SectionWrapper bg={sectionStyle.background}>
      <Stack {...sectionStyle}>
        <Text
          as="h2"
          textStyle="h2"
          textAlign="center"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <HStack
          flexWrap={{ xl: 'nowrap', base: 'wrap' }}
          {...cardContainerStyle}
        >
          {renderFeatures}
        </HStack>
      </Stack>
    </SectionWrapper>
  );
};
