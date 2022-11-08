import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-auto flex flex-col bg-primary">
      <Header/>
      <main className='p-8 mt-24 w-full'></main>
    </div>
  )
}

export default App
