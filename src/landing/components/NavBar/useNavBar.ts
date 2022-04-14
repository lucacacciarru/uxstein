import { StackProps, useBreakpointValue } from '@chakra-ui/react'

export const useNavBar = () => {
    const screenType = useBreakpointValue({ base: 'mobile', lg: 'desktop' });
    const isMobile = screenType === 'mobile';

    const containerProps: StackProps = {
        flexDirection: "row",
        as: "nav",
        py: { base: '0', md: '4' },
        px: { base: '4', sm: '6', md: '12' },
        position: "fixed",
        w: "full",
        top: "0",
        alignItems: "center",
        justifyContent: "space-between",
        bg: "white.0",
    }

    return { containerProps, isMobile }
}