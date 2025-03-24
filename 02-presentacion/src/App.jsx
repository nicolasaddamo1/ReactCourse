import { useState } from 'react'
import PresentationCard from './PresentationCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PresentationCard />
    </>
  )
}

export default App
