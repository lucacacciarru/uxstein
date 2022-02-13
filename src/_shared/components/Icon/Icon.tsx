// TODO: find a way to make it as custom chakra component
// TODO: improve color type management
import { Icon as ChackraIcon } from '@chakra-ui/react';
import { FC } from 'react';
import iconLibrary from './iconLibrary';

const DEFAULT_SIZE = '7rem';
const DEFAULT_COLOR = 'black.0';

type IconComponentModel = typeof iconLibrary;
type Props = {
	name: keyof IconComponentModel;
	size?: string;
	color?: string;
};

export const Icon: FC<Props> = ({ name, size, color }) => {
	return (
		<ChackraIcon
			as={iconLibrary[name]}
			boxSize={size || DEFAULT_SIZE}
			color={color || DEFAULT_COLOR}
			data-testid='icon'
		/>
	);
};
