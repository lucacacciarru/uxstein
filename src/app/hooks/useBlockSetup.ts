import { useState } from 'react';
import { GridItem } from '../store/types';

export type BlockSetup = {
    gridItemSettings: GridItem;
    layoutSettings: {
        h: number;
        w: number;
        i: string;
    };
};

export const useBlockSetup = () => {
    const [blockSetup, setBlockSetup] = useState<BlockSetup>(BLOCK_SETUP_INIT);

    return {
        blockSetup,
        setBlockSetup
    }
}

const BLOCK_SETUP_INIT: BlockSetup = {
    gridItemSettings: {
        type: 'text',
        attributes: {},
        style: {},
    },
    layoutSettings: {
        h: 1,
        w: 1,
        i: '',
    },
}