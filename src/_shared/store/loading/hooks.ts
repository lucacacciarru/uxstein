import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { getIsIdle, getIsLoading } from './selectors';

export function useLoading(key: string) {
  const dispatch = useDispatch();

  const isIdle = useSelector(state => getIsIdle(state, key));
  const isLoading = useSelector(state => getIsLoading(state, key));

  const status = isLoading ? 'loading' : 'idle';

  const setLoading = useCallback(() => {
    return dispatch(actions.setLoading({ key }));
  }, [dispatch, key]);

  const unsetLoading = useCallback(() => {
    return dispatch(actions.unsetLoading({ key }));
  }, [dispatch, key]);

  const resetLoading = useCallback(() => {
    return dispatch(actions.resetLoading({ key }));
  }, [dispatch, key]);

  return { isIdle, isLoading, status, setLoading, resetLoading, unsetLoading };
}
