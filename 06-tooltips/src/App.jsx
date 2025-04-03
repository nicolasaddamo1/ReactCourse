import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TooltipText from './tooltip/TooltipText'

function App() {

  return (
    <>
      <div className="App">
        <p><TooltipText tooltip={"Texto generado"}>Lorem ipsum</TooltipText> dolor sit amet, consectetur adipiscing elit </p>
        <p>Si longus, levis dictata sunt. De quibus cupio scire quid sentias. Eam tum adesse, cum dolor sunt aenean</p>
        <p>Videsne quam sit magna dissensio? Quod quidem iam fit etiam in <TooltipText tooltip={"Esto es lo que hay aqui."}>Academia</TooltipText></p>
      </div>
    </>
  )
}

export default App
