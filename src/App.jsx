import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AuthLayout from './layout/AuthLayout'
import Login from './paginas/Login'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import OlvidePassword from './paginas/OlvidePassword'
import Registrar from './paginas/Registrar'
import NuevoPassword from './paginas/NuevoPassword'

import {AuthProvider} from './context/AuthProvider'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
            <Route path='olvide-password' element={<OlvidePassword />} />
            <Route path='olvide-password/:token' element={<NuevoPassword />} />
            <Route path='registrar' element={<Registrar />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>  
  )
}

export default App
