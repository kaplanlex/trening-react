import {useState} from 'react';

function Counter() {
    const [state, setState] = useState(0);
    
    return (
        <div>
            <p>{ state}</p>
            <button onClick={()=>setState((prev)=>prev+1)}>+</button>
            <button onClick={()=>setState((prev)=>prev-1)}>-</button>
        </div>
    );
}

export default Counter;