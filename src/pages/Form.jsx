import React from 'react';
import ListRow from '../componets/ListRow'
import { useStore } from '../zustand/useStore'

import '../styles/Form.css'

const Form = () => {

  const { inputs, removeItem, writeJson} = useStore()

  return (  
    <div className='root-form'>
      <ListRow/>
      <div className='list-inputs'>
        {inputs.map(input => (
          <input placeholder={input.label} type={input.type} className='input-form' key={input._uid} onChange={(e) => writeJson(input._uid, e.target.value)}/>
        ))}
        {inputs.length > 1 && (
          <button onClick={removeItem}>Remove</button>
        )}
      </div>
    </div>
  );
}

export default Form;