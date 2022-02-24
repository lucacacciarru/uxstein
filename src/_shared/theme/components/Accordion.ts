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
            _last: {
                borderBottom: '2px solid red',
            }
        }
    },
}