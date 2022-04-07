import { Box } from '@chakra-ui/react';
import { Icon, IconComponentModel } from '../Icon';

type Props = {
  iconName: keyof IconComponentModel;
};

export const FloatingActionButton: React.FC<Props> = ({ iconName }) => {
  return (
    <Box
      display="grid"
      placeItems="center"
      position="fixed"
      bottom="12"
      right="12"
      height="14"
      width="14"
      background="brand.primary"
      borderRadius="50%"
      borderWidth="3px"
      borderColor="black.0"
    >
      <Icon name={iconName} height="6" width="6" color="white" />
    </Box>
  );
};
