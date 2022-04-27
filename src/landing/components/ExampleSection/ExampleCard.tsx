import { Box, Button, Image, Stack, StackProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Icon } from '../../../_shared/components';

type Props = {
  src: string;
};

const stackProps: StackProps = {
  alignItems: 'center',
  justifyContent: 'center',
  w: { xl: 'auto', base: 'full' },
  py: '2',
  px: '12',
  position: 'absolute',
  background: 'black.0',
  right: '0',
  bottom: { xl: '-25%', base: '0' },
  transition: 'all 0.6s ease',
};

export const ExampleCard: React.FC<Props> = ({ src }) => {
  const { t } = useTranslation();
  return (
    <Box
      position="relative"
      border="dark.m"
      __css={{ '&:hover > div': { bottom: '0%' } }}
      overflow="hidden"
    >
      <Image src={src} w="full" h="full" objectFit="contain" />
      <Stack {...stackProps}>
        <Button
          leftIcon={<Icon color="white" name="ChevronRight" />}
          variant="unstyled"
          color="white.pure"
          display="flex"
          size="md"
        >
          <Link to="/">{t('landing.examples.labelButton')}</Link>
        </Button>
      </Stack>
    </Box>
  );
};
