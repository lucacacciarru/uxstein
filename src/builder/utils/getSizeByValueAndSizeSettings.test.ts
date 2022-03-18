import { SizesModel } from '../components/StyleFields/SelectOneSize';
import { getSizeByValueAndSizeSettings } from './getSizeByValueAndSizeSettings';

type SizeSettingsModel = {
    sizes: SizesModel;
    selected: keyof SizesModel;
};

const MOCK_SIZES: SizeSettingsModel = {
    sizes: { s: '0.5px', m: '2px', l: '3px', none: '0px' },
    selected: 'l'
}

describe('getSelectedSizeValue', () => {
    test('should return a matching value', () => {
        const result = getSizeByValueAndSizeSettings('3px', MOCK_SIZES);
        expect(result).toBe('l');
    });

    test('should return the selected size if pass unmatching value', () => {
        const result = getSizeByValueAndSizeSettings('213px', MOCK_SIZES);
        expect(result).toBe(MOCK_SIZES.selected);
    })
})