import { ComponentStyleConfig } from '@chakra-ui/react';

export const Switch: ComponentStyleConfig = {
    parts: ['container', 'track', 'thumb'],
    baseStyle: {
        track: {
            border: 'dark.s',
            borderWidth: '2px',
            borderRadius: '30px',
            bg: 'black.20',
            _checked: {
                bg: 'brand.primary'
            },
            _focus: {
                shadow: ''
            }
        },
        thumb: {
            border: 'dark.s',
            borderWidth: '2px',
        }
    }
}