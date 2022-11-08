import React from 'react';
import JSONPretty from 'react-json-pretty';

import '../styles/RenderJson.css'

const RenderJson = props => {

  return (  
    <div className='root-render'>
      <JSONPretty id="json-pretty" data={props.dataJson}></JSONPretty>
    </div>
  );
}

export default RenderJson;