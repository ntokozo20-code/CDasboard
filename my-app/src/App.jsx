import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar.jsx'
import Main from './components/Main.jsx'
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <NavBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
       <Main />
      </div>
    </div>
  )
}

export default App
