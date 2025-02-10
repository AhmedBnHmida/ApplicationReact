import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Ahmed');
  const [lastName, setLastName] = useState('Benhmida');

  return (
    <>
      <Header name={name} lastName={lastName} />
      <Footer />
    </>
  )
}

export default App
