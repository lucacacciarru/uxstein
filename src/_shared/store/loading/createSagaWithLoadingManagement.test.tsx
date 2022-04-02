import { fork, put, select } from 'redux-saga/effects';
import { createCustomSagaRunner } from '../../testConfig/customSagaRunner';
import { getIsLoading } from './selectors';
import { setLoading, unsetLoading } from './actions';
import { createSagaWithLoadingManagement } from './utils';
import { LOADING_REDUCER_KEY } from './reducer';

const TEST_KEY = 'testKey';

describe('createSagaWithLoadingManagement', () => {
  it('should automatically handle the loading state', async () => {
    function* testSaga() {
      const isLoading: boolean = yield select(state =>
        getIsLoading(state, TEST_KEY),
      );
      /**
       * Internally should always be loading
       */
      expect(isLoading).toBeTruthy();
    }

    const sagaWithLoadingManagement = createSagaWithLoadingManagement(
      testSaga,
      { key: TEST_KEY },
    );

    function* testCase() {
      yield sagaWithLoadingManagement();
      const isLoading: boolean = yield select(state =>
        getIsLoading(state, TEST_KEY),
      );
      /**
       * After the execution of the saga should always be idle
       */
      expect(isLoading).toBeFalsy();
    }

    const runSaga = createCustomSagaRunner();

    await runSaga(testCase).toPromise();
  });

  it('should automatically handle exceptions', async () => {
    function* testSaga() {
      throw new Error('Error during the execution of a saga');
    }

    const sagaWithLoadingManagement = createSagaWithLoadingManagement(
      testSaga,
      { key: TEST_KEY },
    );

    function* testCase() {
      yield sagaWithLoadingManagement();
      const isLoading: boolean = yield select(state =>
        getIsLoading(state, TEST_KEY),
      );
      expect(isLoading).toBeFalsy();
    }

    const runSaga = createCustomSagaRunner();

    await runSaga(testCase).toPromise();
  });

  it('should reset in case of `forceReset` is passed', async () => {
    function* testSaga() {
      yield put(setLoading({ key: TEST_KEY }));
      yield put(setLoading({ key: TEST_KEY }));
      yield put(setLoading({ key: TEST_KEY }));

      const loadingState: number = yield select(
        state => state[LOADING_REDUCER_KEY][TEST_KEY].loading,
      );

      /**
       * Since this saga is triggering multiple times the `setLoading`
       * only if the state is reset at the end of the saga the loading status would be `idle`
       */
      expect(loadingState).toBeGreaterThan(1);
    }

    function* withResetCase() {
      const sagaWithReset = createSagaWithLoadingManagement(testSaga, {
        key: TEST_KEY,
        forceReset: true,
      });
      yield sagaWithReset();
      const isLoading: boolean = yield select(state =>
        getIsLoading(state, TEST_KEY),
      );
      /**
       * After the execution of the saga should always be idle
       */
      expect(isLoading).toBeFalsy();
    }

    function* withoutResetCase() {
      const sagaWithoutReset = createSagaWithLoadingManagement(testSaga, {
        key: TEST_KEY,
        forceReset: false,
      });
      yield sagaWithoutReset();
      const isLoading: boolean = yield select(state =>
        getIsLoading(state, TEST_KEY),
      );
      /**
       * After the execution of the saga should still be loading because in this case we are not
       * forcing the state to be reset
       */
      expect(isLoading).toBeTruthy();
    }

    const runSaga = createCustomSagaRunner();

    await runSaga(withResetCase).toPromise();
    await runSaga(withoutResetCase).toPromise();
  });

  it('should not call the saga until all the dependencies inside `dependsOn` are `idle`', async () => {
    const DEPENDENT_KEY = 'DEPENDENT_KEY';

    function* testSaga() {
      const loadingState: boolean = yield select(getIsLoading, TEST_KEY);
      expect(loadingState).toBeFalsy();
    }

    const spySaga = jest.fn().mockImplementation(testSaga);

    function* shouldNotHaveBeenCalledTest() {
      const saga = createSagaWithLoadingManagement(spySaga, {
        key: DEPENDENT_KEY,
        dependsOn: [TEST_KEY],
      });

      fork(saga);
    }

    function* shouldHaveBeenCalledTest() {
      const saga = createSagaWithLoadingManagement(spySaga, {
        key: DEPENDENT_KEY,
        dependsOn: [TEST_KEY],
      });

      yield put(unsetLoading({ key: TEST_KEY }));

      yield saga();
    }

    const runSaga = createCustomSagaRunner({
      mocks: {
        loading: {
          [TEST_KEY]: {
            loading: 1,
          },
        },
      },
    });

    await runSaga(shouldNotHaveBeenCalledTest).toPromise();
    expect(spySaga).not.toHaveBeenCalled();
    await runSaga(shouldHaveBeenCalledTest).toPromise();
    expect(spySaga).toHaveBeenCalled();
  });
});
