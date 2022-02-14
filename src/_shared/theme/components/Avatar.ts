import { ComponentStyleConfig } from '@chakra-ui/react';

export const Avatar: ComponentStyleConfig = {
    parts: ['label', 'badge', 'container', 'excessLabel', 'group'],
    baseStyle: {
        container: {
            border: 'dark.s',
            bg: 'brand.primary',
            color: 'white.pure',
        },
    },
    sizes: {
        'md': {
            container: {
                border: 'dark.m',
            }
        },
        'lg': {
            container: {
                border: 'dark.m',
            }
        },
        'xl': {
            container: {
                border: 'dark.l',
            }
        },
        '2xl': {
            container: {
                border: 'dark.l',
            }
        },
        'full': {
            container: {
                border: 'dark.l',
            }
        }
    }
}