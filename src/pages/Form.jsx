import React from 'react';
import ListRow from '../componets/ListRow'
import { fields } from '../utils/fields'

import '../styles/Form.css'

const Form = props => {

  return (  
    <div className='root-form'>
      <ListRow data={fields} add={props.addInput}/>
      <div className='list-inputs'>
        {props.data.map(input => (
          <input placeHolder={input.label} type={input.type} className='input-form'/>
        ))}
      </div>
    </div>
  );
}

export default Form;