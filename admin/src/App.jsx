import React from 'react'
import Navbar from './components/Navbar'
import Slidebar from './components/Slidebar'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Slidebar/>
      </div>
    </div>
  )
}

export default App