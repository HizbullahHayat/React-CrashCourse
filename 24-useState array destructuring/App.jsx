import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
  const [whatEverWeWant, canEnter] = React.useState('is returned in whatEverWeWant')
  // console.log(isDone);
  return (
    <div className='state'>
      <h1 className='state--title'>Is State important to known?</h1>
      <div className='state--value'>
      <h1>{whatEverWeWant}</h1>
      </div>
    </div>
  )
}

export default App
