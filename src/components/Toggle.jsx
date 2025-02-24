import { useState } from 'react';

const Toggle = () => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        state ? setState(false) : setState(true);
   }
    return (
        <div>
            <button onClick={handleClick}>{ state?"off":"on"}</button>
        </div>
    );
};

export default Toggle;