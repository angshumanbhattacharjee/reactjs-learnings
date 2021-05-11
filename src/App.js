import './App.css';
import {MyImages} from './components/MyImages';
import {MyHeading} from './components/MyHeading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyHeading/>
      </header>
      <div className="App-body">
        <MyImages/>
      </div>
    </div>
  );
}

export default App;
