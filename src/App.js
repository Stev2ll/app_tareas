import './App.css';
import Logo from './imagenes/MI-Logo.gif'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src= {Logo}
          className = 'Mi-logo'         
        />
      </div>
      <div className='tareas-lista'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    

    </div>
  );
}

export default App;
