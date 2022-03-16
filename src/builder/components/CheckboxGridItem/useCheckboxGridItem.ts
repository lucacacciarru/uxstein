import { useMemo } from 'react';
import { AttributeName, ItemAttribute } from '../../store/types';

export const useCheckboxGridItem = (attributes: Partial<Record<AttributeName, ItemAttribute>>) => {
    const checkboxStyleProps = useMemo(
        () => ({
            cursor: 'grab',
            iconColor: attributes.checkbox?.style.checkboxCheckColor,
            __css: {
                '> span:first-of-type': {
                    borderColor: attributes.checkbox?.style.checkboxBorderColor,
                },
            },
        }),
        [attributes.checkbox?.style],
    );

    return checkboxStyleProps;
}