import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

const NotificationBar: React.FC = () => {
    const notificationCtx = useContext(NotificationContext);

    return (
        notificationCtx.notification !== null && (
            <div className={`notification ${notificationCtx.notification}`}>
                <p className='notification_text'> {notificationCtx.notificationText} </p>
                <button type="submit"
                    className='notification_btn'
                    onClick={notificationCtx.clear}>Ok</button>
            </div>
        )
    );
};

export default NotificationBar