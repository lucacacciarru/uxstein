import { useLocation } from 'react-router-dom';

export const useLayoutApp = () => {
    const location = useLocation();
    const showNavigation = location.pathname !== '/app';

    const gutter = showNavigation ? '28' : '96'

    return { showNavigation, gutter }
}