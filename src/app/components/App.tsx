import './App.css'
import { CssVarsProvider } from '@mui/joy/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Feed } from '../../modules/user-interface/pages/feed'
import { Login } from '../../modules/auth/pages/login'
import { Register } from '../../modules/auth/pages/register'

const App = () => {
  return (
    <CssVarsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  )
}

export default App
