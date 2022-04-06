import { Box } from '@chakra-ui/react';
import { Icon, IconComponentModel } from '../../../_shared/components';

type Props = {
  iconName?: keyof IconComponentModel;
};

export const ImageFallback: React.FC<Props> = ({ iconName = 'Photo' }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Icon
        name={iconName}
        color="black.50"
        objectFit="contain"
        maxWidth="28"
      />
    </Box>
  );
};
