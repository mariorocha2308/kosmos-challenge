import React from 'react';

import '../styles/ListRow.css'

const ListRow = props => {

  return (  
    <div className='root-list'>
      {props.data.map(item => (
        <button className='items' onClick={() => props.add(item)}>{item.label}
        </button>
      ))}
    </div>
  );
}

export default ListRow;