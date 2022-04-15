import { ComponentStyleConfig } from '@chakra-ui/react';

export const Accordion: ComponentStyleConfig = {
    baseStyle: {
        button: {
            fontWeight: 'semibold',
            _focus: {
                boxShadow: 'none'
            }
        },
        container: {
            border: 'none',
            borderBottom: 'dark.s',
            borderBottomColor: 'black.20',
            _last: {
                borderBottom: 'dark.s',
                borderBottomColor: 'black.20',
            },
        },
        item: {
            border: 'none',
        }
    },
    variants: {
        greenHover: {
            container: {
                border: 'dark.s',
                bg: 'white.0',
                borderBottomColor: 'black.0',
                borderRadius: 'md',
                mb: { base: '2.5', sm: '4', md: '6', lg: '8' },
                _last: {
                    borderBottomColor: 'black.0',
                },
                _hover: {
                    border: 'green.s',
                    borderRadius: 'md',
                    _last: {
                        border: 'green.s',
                    },
                },
            },
        },
    },
}