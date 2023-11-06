import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Check from './pages/check.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/check" element={<Check />}/>

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
