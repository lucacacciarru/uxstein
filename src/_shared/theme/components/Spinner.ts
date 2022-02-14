import { ComponentStyleConfig } from '@chakra-ui/react';

export const Spinner: ComponentStyleConfig = {
    baseStyle: {
        borderWidth: '4px',
        color: 'brand.primary',
    },
    sizes: {
        xs: {
            borderWidth: '2px',
        },
        sm: {
            borderWidth: '3px',
        }
    }
}