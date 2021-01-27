import logo from './logo.svg';
import './App.css';
import CheckExample from './CheckExample'
import BtnExample from './BtnExample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Lit-Element</h1>
      <div>
        <BtnExample />
        <CheckExample />
      </div>
    </div>
  );
}

export default App;
