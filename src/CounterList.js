import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";


function CounterList(props) {
    const [numberOfCounters, setNumberOfCounters] = useState(1);

    const addCounter = () => {
        setNumberOfCounters(numberOfCounters + 1);
    };

    const deleteCounter = () => {
        if (numberOfCounters <= 1) {
            return numberOfCounters;
        } else {
            setNumberOfCounters(numberOfCounters - 1)
        }

    };


    // const arrCounters = [];
    // for (let i = 1; i <= numberOfCounters; i++) {
    //     arrCounters.push(<Counter/>)
    // };

    return (
        <div className="CounterList">

            <ul style={{listStyle: "none"}}>
                {[...Array(numberOfCounters).keys()].map((el, id) => <li key={id}><Counter/></li>)}

                {/*{arrCounters}*/}
            </ul>

            <div style={{marginLeft: '50px'}}>
                <button onClick={addCounter} className="btn btn-outline-info">+</button>
                <button onClick={deleteCounter} className="btn btn-outline-info">-</button>

            </div>
        </div>
    )
        ;
}

export default CounterList;
