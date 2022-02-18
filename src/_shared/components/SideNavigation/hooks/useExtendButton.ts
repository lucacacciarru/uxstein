import { IconButtonProps, StackProps } from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { iconButtonBaseProps, stackContainerBaseProps } from '../styles/sideNavStylingProps';

export const useExtendButton = () => {
    const [isExtended, setIsExtended] = useState(false);
    const toggleIsExtended = useCallback(() => setIsExtended(prev => !prev), []);

    const iconButtonProps: IconButtonProps = useMemo(
        () => ({
            ...iconButtonBaseProps,
            right: isExtended ? '-20' : '-8',
            transform: isExtended ? 'rotate(-180deg)' : '',
            onClick: toggleIsExtended,
        }),
        [isExtended, toggleIsExtended],
    );

    const containerProps: StackProps = useMemo(() => {
        return {
            ...stackContainerBaseProps,
            w: isExtended ? '56' : '28',
        };
    }, [isExtended]);

    return {
        isExtended,
        iconButtonProps,
        containerProps,
    }
}