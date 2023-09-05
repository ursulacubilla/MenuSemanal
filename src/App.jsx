import { useState } from 'react'
import { Products } from './Components/Products/Products'
import { Food } from './Components/Products/Food'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Ideas de Menu Semanal</h1>
  
      <Products />
    </>
  )
}

export default App
