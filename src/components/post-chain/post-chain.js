import React, { useContext } from 'react';
import  ContextFile  from '../../context';

function PostChain() {
    const { text } = useContext(ContextFile);
    const outputArray = text.match(/.{1,144}/g)
  return (
        <div>
            Post-chain-area
            <hr/>
            {
            (text.length >=1)
            ?
            outputArray.map((elem, i)=>{
                return(
                    <p>{i+1 + "). " +elem}</p>
                )
            })
            :
            <p>Type Something...!!</p>
            }
        </div>);
}

export default PostChain;
