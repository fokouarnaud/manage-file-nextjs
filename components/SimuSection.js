import React from 'react'
import SimuCardFor from './SimuCardFor';
import SimuCardIfElse from './SimuCardIfElse';


const SimuSection = () => {
  return (
    <div className="py-10">
        <div className="max-w-4xl px-5 mx-auto">
        <SimuCardIfElse/>
        <SimuCardFor/>
            
        </div>
    </div>
  );
}

export default SimuSection