import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import XCountries from './XCountries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <XCountries />
    </>
  )
}

export default App
