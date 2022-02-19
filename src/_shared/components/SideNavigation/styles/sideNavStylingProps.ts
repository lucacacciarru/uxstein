import { IconButtonProps, StackProps } from '@chakra-ui/react';

export const iconButtonBaseProps: IconButtonProps = {
    position: 'relative',
    top: '32',
    transition: 'all .3s linear',
    zIndex: '25',
    size: 'icon-md',
    variant: 'unstyled',
    'aria-label': 'extend-button',
}

export const stackContainerBaseProps: StackProps = {
    position: 'fixed',
    top: '0',
    left: '0',
    h: '100vh',
    border: 'dark.s',
    borderWidth: '0 3px',
    spacing: '20',
    bg: 'white.bg',
    zIndex: '20',
    overflow: 'hidden',
    pt: '8',
}