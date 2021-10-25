import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar.js'

function App() {
  return (
    //se genera el compenente navbar 
    <div className="App">
      <NavBar/>
      <h1>MusicStore</h1>
    </div>
  );
}

export default App;
