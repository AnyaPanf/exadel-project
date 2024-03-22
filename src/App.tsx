import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import { userDataState } from './interfaces'

function App() {
  const [userData, setUserData] = useState<userDataState>({
    name: "",
    email: "",
    password: "",
    isAccepted: false,
  })

  return (
    <div className='container'>
      <RegistrationForm user={userData} setUser={setUserData} />
    </div>)
}

export default App
