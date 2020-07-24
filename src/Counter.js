import React, {useState} from 'react';
import CountBtn from "./CountBtn";


function Counter(props) {

    const [count, setCount] = useState(5);

    const updateCounter = (n) => {
        setCount(n);
    };

    return (
        <div>

            <CountBtn value={-3} count={count} updateCounter={updateCounter}/>
            <CountBtn value={-2} count={count} updateCounter={updateCounter}/>
            <CountBtn value={-1} count={count} updateCounter={updateCounter}/>
           <span className="button">{count}</span>
            <CountBtn value={1} count={count} updateCounter={updateCounter}/>
            <CountBtn value={2} count={count} updateCounter={updateCounter}/>
            <CountBtn value={3} count={count} updateCounter={updateCounter}/>


        </div>
    );
}

export default Counter;
