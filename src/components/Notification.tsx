import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

export const NotificationBar: React.FC = () => {
    const notificationCtx = useContext(NotificationContext);

    return (
        notificationCtx.notification !== null && (
            <div className={`notification ${notificationCtx.notification}`}>
                <p> {notificationCtx.notificationText} </p>
                <button type="submit"
                    className='notification_btn'
                    onClick={notificationCtx.clear}>Ok</button>
            </div>
        )
    );
};