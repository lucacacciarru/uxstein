import { blockSizeSettings } from '../config/styleSettings/block'
import { getSelectedSizeValue } from './getSelectedSizeValue'

describe('getSelectedSizeValue', () => {
    test('should return a truthy value if pass a defined value', () => {
        const result = getSelectedSizeValue(blockSizeSettings.borderWidth);
        expect(result).toBeTruthy();
    })

    test('should return a empty string if pass undefined value', () => {
        const result = getSelectedSizeValue();
        expect(result).toBe('');
    })
})