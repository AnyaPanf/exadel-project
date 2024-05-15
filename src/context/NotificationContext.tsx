import React from 'react';
import { useState } from "react";

interface NotificationContextData {
  notification: string | null;
  notificationText: string | null;
  success: (text: string) => void;
  error: (text: string) => void;
  clear: () => void;
};

interface NotificationProviderProps {
  children: React.ReactNode;
};

const NotificationContext = React.createContext<NotificationContextData>({
  notification: null,
  notificationText: null,
  success: () => { },
  error: () => { },
  clear: () => { },
});

export const STATES: {
  SUCCESS: string;
  ERROR: string;
} = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const NotificationProvider: React.FC<NotificationProviderProps> = (props) => {
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationText, setNotificationText] = useState<string | null>(null);

  const success = (text: string) => {
    window.scroll(0, 0);
    setNotificationText(text);
    setNotification(STATES.SUCCESS);
  };
  const error = (text: string) => {
    window.scroll(0, 0);
    setNotificationText(text);
    setNotification(STATES.ERROR);
  };
  const clear = () => {
    setNotificationText(null);
    setNotification(null);
  };
  return (
    <NotificationContext.Provider
      value={{ success, error, clear, notification, notificationText }}
    >
      <div>
        {props.children}
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationContext;