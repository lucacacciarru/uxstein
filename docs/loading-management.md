# Loading State

## Structure

The structure of the state is described by the type `LoadingState`:

```typescript
type LoadingState = {
  [key: string]: {
    loading: number
  }
}
```

For example:

```typescript
const state: LoadingState = {
  users: {
    loading: 3
  },
  articles: {
    loading: 0
  }
}
```

To understand if a slice is in loading, we can just look at the value of the attribute `loading`:

- in case is `greater than 0`, it means that the slice has some pending requests still in execution so the status is `loading`.
- in case is `0` the status is `idle`.

## Usage

The loading state is automatically handled, you just have to wrap your saga with the function `createSagaWithLoadingManagement`.

This function accept 2 parameters:

- 1. the saga
- 2. an object of options that **must** contain a unique `key`

Let's make an example:

```typescript
// Inside Your custom root saga
import { fetchUsersSaga } from './fetchUsersSaga';
import { fetchUserAction } from './fetchUserAction';
import { createSagaWithLoadingManagement } from "../_shared/loading"

export function* usersRootSaga() {
  /**
   * Instead of:
   * yield takeLatest(fetchUserAction, fetchUsersSaga)
   * you have to wrap `fetchUsersSaga` with `createSagaWithLoadingManagement`
   */
  yield takeLatest(fetchUserAction, createSagaWithLoadingManagement(fetchUsersSaga, { key: 'users' }))
}
```

In this way the loading state will be automatically handled in the following way:

1. before calling `fetchUsersSaga` the loading state of the *users* will be **increased**
2. `fetchUsersSaga` is called
3. after the execution of `fetchUsersSaga` the loading state of the *users* will be **decreased**

To understand better how it work, let's see for each step the values returned by the hook `useLoading`

```tsx
const { isLoading, isIdle, status } = useLoading('users')
```

| step | isLoading | isIdle  | status     |
| ---- | --------- | ------- | ---------- |
| 1    | `false`   | `true`  |  `idle`    |
| 2    | `true`    | `false` |  `loading` |
| 3    | `false`   | `true`  |  `idle`    |

## API

### createSagaWithLoadingManagement

```typescript
function createSagaWithLoadingManagement<Saga extends (...args: any[]) => Generator<any, any, any> = () => any>(saga: Saga, options: LoadingManagementOptions)

// Where LoadingManagementOptions is:
type LoadingManagementOptions = {
  key: string; // <-- required
  forceReset?: boolean // <-- optional
}
```

The `forceReset` option, in case is `true`, will force the loading state to `0` (idle) after the execution of the saga.

> It can be useful in case inside the saga the loading state is manually increased.
> **Use it carefully**

### useLoading

```typescript
function useLoading(key: string): {
  status: 'loading' | 'idle';
  isIdle: boolean;
  isLoading: boolean;
  setLoading: () => void; // Manually increase the loading counter the current slice
  resetLoading: () => void; // Manually reset the loading counter the current slice
  unsetLoading: () => void; // Manually decrease the loading counter the current slice
}
```
