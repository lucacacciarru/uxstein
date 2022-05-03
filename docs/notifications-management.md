# Notifications State

## Structure

Notifications are described by the `Notification` type:

```typescript
type Notification = {
  id: string;
  actionType: string;
  actionPayloadId: string | undefined;
}
```

The structure of the Notifications state is described by the type `NotificationsState`:

```typescript
type NotificationsState = Notification[];
```

For example:

```typescript
const state: NotificationsState = [
  {
    id: 'anyOtherId',
    actionType: 'persona/updatePersona/failure',
    actionPayloadId: 'updatedPersonaId'
  },
  {
    id: 'anyId',
    actionType: 'persona/fetchPersonas/success',
  }
]
```

## Usage

Notifications are automatically handled.
For almost any action dispatched to the store, a corresponding notification is dispatched to the Notifications store.
There are some exception, which are handled in the `resolveActionsToNotify()` function inside the `saga`.

```typescript
const resolveActionsToNotify = (action: Action) => {
  return !action.type.match(/(notifications)|(loading)/gi);
};
```

In the example above, action types which contain `notifications` or `loading` are filtered out.
Any other action also dispatches a notification.

> **IMPORTANT!** - Notifications ***must*** be filtered out, otherwise each notification would also trigger a notification,
> resulting in an endless loop that may be useful to obtain the perpetual motion engine, but is not very browser friendly.

Each notification is automatically deleted after 3 seconds of permanence in the store.

## API

### `getLastNotification() selector`

This selector gets the more recent notification from the store, allowing you to perform actions accordingly.

An example implementation:

```typescript jsx
export function useToastNotifier(notificationsDictionary: ToastNotificationsDictionary) {
  const toast = useToast();
  const lastNotification = useSelector((state) => getLastNotification(state));

  React.useEffect(() => {
    const actionType = lastNotification?.actionType;
    if (!lastNotification || !Object.keys(notificationsDictionary).includes(actionType)) return;

    const { message, type } = notificationsDictionary[actionType];

    toast({
      render: () => (
        <GenericToast
          status={type}
          translationKey={message}
        />
      ),
    });
  }, [lastNotification]);
}
```
