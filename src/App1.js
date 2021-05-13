import {React} from 'react';
import './App1.css';

let currentTime = new Date().getHours();
let greeting;

function App1 () {
    return (
        <div className="App1">
            <h1 className="App1-body">
                Hello World, {currentTime>1 && currentTime<12 ? <span style={{color:"green"}}>{greeting="Good Morning"}</span >: (currentTime < 19 ? <span style={{color:"Orange"}}>{greeting="Good Afternoon"}</span > : <span style={{color:"blue"}}>{greeting="Good Evening"}</span >)}
            </h1>
        </div>
    );
}

export default App1;