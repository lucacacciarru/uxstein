import { authRootSaga } from '../../auth/store';
import { personaRootSaga } from '../../persona/store/saga';

export const sagas = [authRootSaga, personaRootSaga];
