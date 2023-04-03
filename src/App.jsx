import './App.css'
import React, { useEffect, useRef } from 'react'
import { Power3 } from 'gsap/gsap-core'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle red"></div>
          <div className="circle blue"></div>
        </div>
      </header>
    </div>
  )
}

export default App
