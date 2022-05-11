// TODO: find a way to make it as custom chakra component
// TODO: improve color type management
import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react';
import iconLibrary from './iconLibrary';

export const DEFAULT_SIZE = 'full';
export const DEFAULT_COLOR = 'black.0';

export type IconComponentModel = typeof iconLibrary;
export type CustomIconProps = {
  name: keyof IconComponentModel;
  size?: string;
} & IconProps;

export const Icon: React.FC<CustomIconProps> = ({
  name,
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  ...rest
}) => {
  return (
    <ChakraIcon
      as={iconLibrary[name]}
      boxSize={size}
      color={color}
      data-testid="icon"
      {...rest}
    />
  );
};
