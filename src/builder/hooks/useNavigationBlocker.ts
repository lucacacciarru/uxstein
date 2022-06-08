import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HistoryRouterProps } from 'react-router-dom';
import { useHistory } from '../../_shared/hooks';
import { getIsDirty } from '../store/selectors/getIsDirty';

type BlockerCallback = HistoryRouterProps['history'] & { retry: Function };

export function useBlocker(blocker: Function): void {
  const history = useHistory();
  const isDirty = useSelector(getIsDirty);
  useEffect(() => {
    if (!isDirty) return;

    let unblock = history.block(tx => {
      let autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [history, blocker, isDirty]);
}

export const useNavigationBlocker = () => {
  useBlocker(({ location, retry }: BlockerCallback) => {
    const isConfirm = window.confirm(
      `Stai cercando di tornare a ${location.pathname}. I dati non salvati verranno persi`,
    );
    //TODO: Change it with a chakra modal, setup translation

    if (isConfirm) {
      retry();
    }
  });
};
