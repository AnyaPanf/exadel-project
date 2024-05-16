import './App.css';
// import RegistrationForm from './components/RegistrationForm';
import { Header } from './routes/Header';
import { Outlet } from "react-router-dom";
import { NotificationProvider } from './context/NotificationContext.tsx';
import NotificationBar from './components/Notification';

export const App: React.FC = () => {
  return (
    <>
      <NotificationProvider>
        <Header />
        <div className='container'>
          <div id="detail">
            <NotificationBar />
            {/* <RegistrationForm /> */}
            <Outlet />
          </div>
        </div>
      </NotificationProvider>
    </>
  )
};
export default App;
