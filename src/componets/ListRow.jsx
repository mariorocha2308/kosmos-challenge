import React from 'react';
import { tags } from '../utils/data'
import { useStore } from '../zustand/useStore'

import '../styles/ListRow.css'

const ListRow = () => {

  const { inputs, insertItem } = useStore()

  return (  
    <div className='root-list'>
      {tags.map(item => (
        <button className='items' onClick={() => insertItem(item)} key={item._uid} disabled={inputs.some(element => element._uid === item._uid)}>{item.label}
        </button>
      ))}
    </div>
  );
}

export default ListRow;