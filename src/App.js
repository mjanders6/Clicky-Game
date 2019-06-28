import React from 'react'
import Container from './components/Container'
import NavBar from './components/NavBar'
import Jumbo from './components/Jumbo'


function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Jumbo />
      </div>
      <div>
        <Container />
      </div>
    </div>
  )
}


export default App;
