import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    < div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
       <Main />
      </div>
    </div>
  )
}

export default App
