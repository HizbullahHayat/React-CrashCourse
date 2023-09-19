import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
  const isDone = React.useState('Yes')
  // console.log(isDone);
  return (
    <div className='state'>
      <h1 className='state--title'>Is State important to known?</h1>
      <div className='state--value'>
      <h1>{isDone[0]}</h1>
      </div>
    </div>
  )
}

export default App
