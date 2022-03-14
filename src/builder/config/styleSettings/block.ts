import { SizesModel } from '../../components/StyleFields/SelectOneSize';

type TextSizesSettingsModel = Record<string, {
    sizes: SizesModel, selected: keyof SizesModel
}>

export const blockSizeSettings: TextSizesSettingsModel = {
    borderWidth: {
        sizes: { s: '0.5px', m: '2px', l: '3px', none: '0px' },
        selected: 'l'
    },
    borderRadius: {
        sizes: { s: '5px', m: '10px', l: '20px', none: '0px' },
        selected: 'm'
    },
}