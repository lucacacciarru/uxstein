import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTemplatesTrigger } from '../../store/actions/fetchTemplates';

export const useTemplates = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTemplatesTrigger());
    }, [dispatch]);
}