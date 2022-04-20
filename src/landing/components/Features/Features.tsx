import { HStack, Stack, Heading } from '@chakra-ui/react';
import { SectionWrapper } from '../SectionWrapper';
import { useFeatures } from './useFeatures';

export const Features = () => {
  const { renderFeatures, title, sectionStyle, cardContainerStyle } =
    useFeatures();
  return (
    <SectionWrapper bg={sectionStyle.background}>
      <Stack {...sectionStyle}>
        <Heading
          as="h2"
          size="h2"
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
