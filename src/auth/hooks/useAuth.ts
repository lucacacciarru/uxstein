import { useDispatch, useSelector } from 'react-redux';
import { loginTrigger } from '../store/actions/login';

export const useAuth = () => {
    const dispatch = useDispatch();
    const login = () => {
        dispatch(loginTrigger({ username: '', password: '' }));
    }
    //TODO: Create getAuthStatus selector and use it here
    //const authStatus = useSelector(getAuthStatus);
    //isLogged = authStatus === 'logged';
    const store: any = useSelector((state) => state);
    const isLogged = store.auth?.status && store.auth.status === 'logged';
    return {
        login,
        isLogged
    }
}