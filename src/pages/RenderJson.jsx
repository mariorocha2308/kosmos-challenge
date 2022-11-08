import React from 'react';
import JSONPretty from 'react-json-pretty';
import { useStore } from '../zustand/useStore'

import '../styles/RenderJson.css'

const RenderJson = () => {

  const { inputs } = useStore()

  return (
    <div className='root-render'>
      <JSONPretty id="json-pretty" data={{fields: inputs}}></JSONPretty>
    </div>
  );
}

export default RenderJson;