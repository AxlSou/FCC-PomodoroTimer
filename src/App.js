import './App.scss';
import BreakAndSession from './Components/BreakandSessionBtn/BSBtn.js';
import Timer from './Components/Timer/timer';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Pomodoro Timer</h1>
      </div>
      <BreakAndSession />
      <Timer />
    </div>
  );
}

export default App;
