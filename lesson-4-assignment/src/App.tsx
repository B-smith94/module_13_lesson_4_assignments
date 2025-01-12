import Login from './components/Login'
import ProtectedPage from './components/ProtectedPage'
import ProtectedRoute from './components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// Task 3 and 5
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/protected-page' element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
