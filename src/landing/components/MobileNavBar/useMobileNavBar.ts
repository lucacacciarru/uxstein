import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavLabels } from '../../hooks/useNavLabels';

export const useMobileNavBar = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const { pathname } = useLocation();

    const { navLabels } = useNavLabels();

    useEffect(() => {
        pathname && onClose();
    }, [pathname, onClose]);

    return {
        isOpen, onToggle, onClose, navLabels
    }
}