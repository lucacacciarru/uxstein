// TODO: find a way to make it as custom chakra component
// TODO: improve color type management
import { Icon as ChackraIcon } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import iconLibrary from './iconLibrary';
import { colors as CustomColors } from '../../theme/style/colors';

const DEFAULT_SIZE = '7rem';

type IconComponentModel = typeof iconLibrary;
type Props = {
	name: keyof IconComponentModel;
	size?: '6' | '8' | '10' | '14' | '16' | string;
	color?: 'primary' | 'black' | 'white' | 'error' | string;
};

export const Icon: FC<Props> = ({ name, size, color }) => {
	const selectedColor = useMemo(() => {
		if (!color || color === 'black') {
			return CustomColors.black[0];
		}
		if (color === 'primary') {
			return CustomColors.brand.primary;
		}

		if (color === 'error') {
			return CustomColors.status.error;
		}

		return color;
	}, [color]);

	return (
		<ChackraIcon
			as={iconLibrary[name]}
			boxSize={size || DEFAULT_SIZE}
			color={selectedColor}
			data-testid='icon'
		/>
	);
};
