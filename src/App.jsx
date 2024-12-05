// Desc: Main App component for the React-Portfolio project.
// Usage: Rendered by React-Portfolio/src/main.jsx
import React from 'react'
import './styles/App.css'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'


function App() {
  return (
    <div id='root'>
      <Header />    
      <main>     
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
