import { BlockSetup } from '../../hooks/useBlockSetup';

const DEFAULT_BLOCK_SIZES = {
    maxW: 6,
    maxH: 5,
    minW: 1,
    minH: 1,
}

export const useOptionalSettings = (optionalSettings?: BlockSetup['optionalSettings']) => {
    const settingsWithDefault = {
        ...DEFAULT_BLOCK_SIZES,
        ...optionalSettings,
    }

    return {
        settingsWithDefault
    }
}