import { useState } from 'react'
import Form from './pages/Form'
import RenderJson from './pages/RenderJson'

function App() {

  const [inputs, setInputs] = useState([
    {
      component: 'text',
      label: 'Email',
      type: 'text',
      _uid: 'pol785'
    }
  ])

  const addInput = (newInput) => {
    setInputs([...inputs, newInput])
  }

  return (
    <div>
      <Form addInput={addInput} data={inputs}/>
      <RenderJson dataJson={inputs}/>
    </div>
  )
}

export default App
