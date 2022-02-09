import './App.css';
import FormularioColores from './components/FormularioColores.js'

function App() {
  return (
    <div className='contenedorPrincipal'>
      <div className="contenedorDeElementos">
        <h1 className='tituloPrincipal'>Visualizador de Colores</h1>
        <FormularioColores></FormularioColores>
      </div>
    </div>
  );
}

export default App;
