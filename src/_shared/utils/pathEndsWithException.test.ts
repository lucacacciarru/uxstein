import { pathEndsWithException } from './pathEndsWithException';

describe('pathEndsWithException', () => {
    test('should return = false if path dont match', () => {
        const path = 'some/someOther';
        const exceptions = ['exception'];

        const result = pathEndsWithException(path, exceptions);

        expect(result).toBe(false);
    });

    test('should return = true if path match', () => {
        const path = 'some/exception';
        const exceptions = ['exception'];

        const result = pathEndsWithException(path, exceptions);

        expect(result).toBe(true);
    });

    test('should return = true if path match and exception have :params', () => {
        const path = 'some/exception';
        const exceptions = [':params/exception'];

        const result = pathEndsWithException(path, exceptions);

        expect(result).toBe(true);
    });

    test('should return = false if exceptions are empty', () => {
        const path = 'some/exception';
        const exceptions: string[] = [];

        const result = pathEndsWithException(path, exceptions);

        expect(result).toBe(false);
    });
})