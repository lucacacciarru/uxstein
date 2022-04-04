import { useLocation } from 'react-router-dom';
import { pathsWithHidedNavigation } from '../../types/paths';
import { pathEndsWithException } from '../../utils/pathEndsWithException';

export const useLayoutApp = () => {
    const location = useLocation();
    const showNavigation = !pathEndsWithException(location.pathname, pathsWithHidedNavigation);

    const gutter = showNavigation ? '28' : '96'

    return { showNavigation, gutter }
}

