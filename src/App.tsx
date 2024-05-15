import './App.css';
import RegistrationForm from './components/RegistrationForm';
import { Header } from './routes/Header';
import { NotificationProvider } from './context/NotificationContext.tsx';
import { NotificationBar } from './components/Notification';

const App: React.FC = () => {
  return (
    <>
      <NotificationProvider>
        <Header />
        <NotificationBar />
        <div className='container'>
          {/* <RegistrationForm /> */}
        </div>
      </NotificationProvider>
    </>
  )
};
export default App;
