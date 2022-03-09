import { BlockSetup } from '../../hooks/useBlockSetup';

export const text: BlockSetup = {
    gridItemSettings: {
        type: 'text',
        attributes: {
            title: {
                label: 'builder.toolBar.attributes.title.label',
                placeholder: 'builder.toolBar.attributes.title.placeholder',
                value: '',
                initialValue: 'Titolo',
                style: {},
            },
            subtitle: {
                label: 'builder.toolBar.attributes.subtitle.label',
                placeholder: 'builder.toolBar.attributes.subtitle.placeholder',
                value: '',
                initialValue: 'Sottotitolo',
                style: {}
            },
        },
        style: { background: 'black', color: 'white' },
    },
    layoutSettings: {
        h: 2,
        w: 2,
        i: ''
    },
    optionalSettings: {
        maxW: 3,
    }
}