import React from 'react';



function CountBtn(props) {

    const send = () => {
        props.updateCounter(props.value + props.count)
    };

    return (

        <button onClick={send} className="btn btn-outline-info">{props.value}</button>
)
    ;
}

export default CountBtn;
