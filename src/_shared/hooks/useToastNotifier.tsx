import React from 'react';
import { useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { getLastNotification } from '../store/notifications/selectors';
import { GenericToast } from '../components/GenericToast';
import { ToastNotificationsDictionary } from '../constants';

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
