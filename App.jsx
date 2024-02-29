import {useTimer}  from "./useTimer"
import './App.css'

function App() {
  const {seconds, minuts, hours} = useTimer();
  return (
    <>
      <div className="App">
        <h1>Timer</h1>
        <div className="timer">
          <span>{hours}</span>
          <span>:</span>
          <span>{minuts}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
       {/*} <div className="buttons">
          <button onClick={toggle}>Start/Stop</button>
          <button onClick={reset}>Reset</button>
  </div>*/}
      </div>
    </>
  )
}

export default App
