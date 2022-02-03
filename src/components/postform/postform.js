import React, { useContext } from 'react';
import  ContextFile  from '../../context';

function Postform() {
  const { text,setText } = useContext(ContextFile);
  return (
        <div>
            <p>No.of Characters : {text.length}</p>
            <textarea rows="20" cols="80" onChange={(e) => setText(e.target.value)} />
        </div>
  )
}

export default Postform;
