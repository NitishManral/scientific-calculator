import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCalculator from './components/SimpleCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleCalculator/>
    </>
  );
}

export default App