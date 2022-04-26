// TODO: replace harcoded link with imported PATH
import { Button, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../SectionWrapper';
import { MediaShowcaseRows } from './MediaShowcaseRows';
import { useMediaShowcaseSection } from './useMediaShowcaseSection';

export const MediaShowcaseSection: FC = () => {
  const { imgRows, labelButton, title } = useMediaShowcaseSection();
  return (
    <SectionWrapper overflow="hidden">
      <MediaShowcaseRows rows={imgRows[0]} />
      <Stack align="center" gap="4" m="16">
        <Heading as="h2" size="h2" textAlign="center">
          {title}
        </Heading>
        <Link to="/examples">
          <Button>{labelButton}</Button>
        </Link>
      </Stack>
      <Stack spacing="6">
        <MediaShowcaseRows rows={imgRows[1]} />
      </Stack>
    </SectionWrapper>
  );
};
