export const pathEndsWithException = (path: string, exceptions: string[]) => {
    let result = false;
    const allBeforeSlash = /.+(?=\/)/g;
    for (const exception of exceptions) {
        const withoutParams = exception.replace(allBeforeSlash, "");
        if (path.endsWith(withoutParams)) {
            result = true;
            break;
        }
    }
    return result;
};