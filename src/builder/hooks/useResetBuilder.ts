import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetBuilder } from '../store/actions/reset';

export const useResetBuilder = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        return () => { dispatch(resetBuilder()) };
    }, [dispatch]);
}