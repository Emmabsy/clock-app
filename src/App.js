
import './App.css';

//import Greeter from './Greeter';
import Clock from './Clock';


function App() {
  return (
    <div>
        <h1 class="tit"> React-clock-app</h1>
      <Clock continent='Africa' city ='Nairobi'/>  <hr/>
      <Clock continent='Europe' city ='London'/>  <hr/>
      <Clock continent='Australia' city ='Sydney'/>  <hr/>
      <Clock continent='America' city ='New_york'/>  <hr/>
      <Clock continent='Asia' city ='Tokyo'/>  <hr/>

    </div>
  );
   {/*
    <div className="App">
      <header className="App-header">
        <Greeter greeting ='Hey' name='John'/>
        <Greeter/> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  
    </div>
  */}
  
}

export default App;
