import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'

function App() {
  return (
    //se genera el compenente navbar 
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
