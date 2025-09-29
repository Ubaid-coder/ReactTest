
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignIn from './components/signIn.jsx'
import SignUP from './components/signUP.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>

    <Route path='/' element={<App />} />
    <Route path='/signIn' element={<SignIn />} />
    <Route path='/signUp' element={<SignUP />} />
    
    </Routes>

  </BrowserRouter>

)
