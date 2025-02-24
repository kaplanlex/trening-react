/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';

const Timer =()=> {
    const [state, setState] = useState(0);
    const [start, setStart] = useState(false);
    useEffect(() => {
        if (!start) {
            return;
        }
        const i = setInterval(() => setState(prev => prev + 1), 1000);
        return()=>clearInterval(i);
    }, [start]);
    const handleF = () => {
        setStart(false);
        setState(0);

    };
        return (
            <div>
                <p>{ state}</p>
                <button onClick={()=>setStart(true)}>Start</button>  
                <button onClick={() => setStart(false)}>Stop</button>
                <button onClick={handleF}>Reset</button>
            </div>
        );
}

export default Timer;

  