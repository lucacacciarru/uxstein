// TODO: remove hardcoded loginTrigger
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuthStatus } from '../selectors/getAuthStatus';
import { getUserProfile } from '../selectors/getUserProfile';
import { loginTrigger } from '../store/actions/login';
import { logoutTrigger } from '../store/actions/logout';

export const useAuth = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state as string;
    const authStatus = useSelector(getAuthStatus);
    const isLogged = authStatus === 'logged';

    const login = () => {
        dispatch(loginTrigger({ email: 'test@test.com', password: 'Test1234' }));
    }

    const logout = () => {
        dispatch(logoutTrigger({}));
    }

    useEffect(() => {
        if (isLogged && from) {
            navigate(from, { replace: true });
        }
    }, [isLogged, from, navigate]);

    const profile = useSelector(getUserProfile)

    return {
        login,
        logout,
        isLogged,
        username: profile?.username
    };
};
