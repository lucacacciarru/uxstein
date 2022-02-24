// TODO: find a way to make it as custom chakra component
// TODO: improve color type management
import { Icon as ChackraIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';
import iconLibrary from './iconLibrary';

export const DEFAULT_SIZE = 'full';
export const DEFAULT_COLOR = 'black.0';

type IconComponentModel = typeof iconLibrary;
type Props = {
  name: keyof IconComponentModel;
  size?: string;
} & IconProps;

export const Icon: FC<Props> = ({
  name,
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  ...rest
}) => {
  return (
    <ChackraIcon
      as={iconLibrary[name]}
      boxSize={size}
      color={color}
      data-testid="icon"
      {...rest}
    />
  );
};
