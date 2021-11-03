import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'
import ItemCount from './components/ItemCount';

function App() {
  return (
    // se genera el compenente navbar 
    // deje el campo inital en 0 para que vean que se bloquea cuando no existe stock
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemCount intial={0} stock={5} />
    </div>
  );
}

export default App;
