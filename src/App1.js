import {React} from 'react';
import './App.css';

let currentTime = new Date(2021, 5, 5, 21).getHours();
let greeting = '';

function App1 () {
    return (
        <div className="App-body">
            <h1>
                Hello World, {currentTime>1 && currentTime<12 ? <span style={{color:"green"}}>{greeting="Good Morning"}</span >: (currentTime < 19 ? <span style={{color:"Orange"}}>{greeting="Good Afternoon"}</span > : <span style={{color:"blue"}}>{greeting="Good Evening"}</span >)}
            </h1>
        </div>
    );
}

export default App1;