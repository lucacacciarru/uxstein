import { useCallback, useState } from 'react';

export const useEtendButton = () => {
    const [isExtended, setIsExtended] = useState(false);
    const toggleIsExtended = useCallback(() => setIsExtended(prev => !prev), []);

    return {
        isExtended,
        toggleIsExtended
    }
}