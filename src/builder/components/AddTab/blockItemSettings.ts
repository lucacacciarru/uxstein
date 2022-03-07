import { BlockSetup } from '../../hooks/useBlockSetup';
import { DraggableBlockType } from './DraggableBlock';

export const blockItemSettings: Record<DraggableBlockType, BlockSetup> = {
    text: {
        gridItemSettings: {
            type: 'text',
            attributes: {
                title: {
                    label: 'app.toolBar.attributes.title.label',
                    placeholder: 'app.toolBar.attributes.title.placeholder',
                    value: '',
                    style: {},
                },
                subtitle: {
                    label: 'app.toolBar.attributes.subtitle.label',
                    placeholder: 'app.toolBar.attributes.subtitle.placeholder',
                    value: '',
                    style: {}
                },
            },
            style: { background: 'red', color: 'white' },
        },
        layoutSettings: {
            h: 2,
            w: 2,
            i: ''
        },
        optionalSettings: {
            maxW: 3,
        }
    },
    "text-list": {
        gridItemSettings: {
            type: 'text-list',
            attributes: {},
            style: { background: 'green', color: 'white' },
        },
        layoutSettings: {
            h: 2,
            w: 1,
            i: ''
        }
    },
    "image-list": {
        gridItemSettings: {
            type: 'image-list',
            attributes: {},
            style: { background: 'red', color: 'white' },
        },
        layoutSettings: {
            h: 1,
            w: 2,
            i: ''
        }
    },
    checkbox: {
        gridItemSettings: {
            type: 'checkbox',
            attributes: {},
            style: { background: 'purple', color: 'white' },
        },
        layoutSettings: {
            h: 3,
            w: 2,
            i: ''
        }
    },
    image: {
        gridItemSettings: {
            type: 'image',
            attributes: {},
            style: { background: 'purple', color: 'white' },
        },
        layoutSettings: {
            h: 2,
            w: 3,
            i: ''
        }
    },
    progress: {
        gridItemSettings: {
            type: 'progress',
            attributes: {},
            style: { background: 'black', color: 'white' },
        },
        layoutSettings: {
            h: 1,
            w: 1,
            i: ''
        }
    },
    rate: {
        gridItemSettings: {
            type: 'rate',
            attributes: {},
            style: { background: 'grey', color: 'white' },
        },
        layoutSettings: {
            h: 2,
            w: 2,
            i: ''
        }
    },
}

export const getBlockItemSettings = (type: DraggableBlockType) => ({
    ...blockItemSettings[type],
    layoutSettings: {
        ...blockItemSettings[type].layoutSettings,
        i: Date.now().toString(),
    },
})