import { SizesModel } from '../../components/StyleFields/SelectOneSize';

type TextSizesSettingsModel = Record<'title' | 'body' | 'subtitle', {
    sizes: SizesModel, selected: keyof SizesModel
}>

export const textSizeSettings: TextSizesSettingsModel = {
    title: {
        sizes: { s: '33px', m: '35px', l: '40px' },
        selected: 'l'
    },
    subtitle: {
        sizes: { s: '13px', m: '16px', l: '18px' },
        selected: 'm'
    },
    body: {
        sizes: { s: '5px', m: '10px', l: '15px' },
        selected: 'm'
    },
}