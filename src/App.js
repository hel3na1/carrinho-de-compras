import logo from './logo.svg';
import './App.css';
import MyLayout from './components/MyLayout';
import CardComponent from './components/CardComponent';
import Carrinho from './components/Carrinho';
import InputPesquisa from './components/InputPesquisa';
import DetalhesCompra from './components/DetalhesCompra';

function App() {
  return (
    <div className="App">
      <MyLayout/>
      <Carrinho/>
      {/* <InputPesquisa/> */}
  
    </div>
  );
}

export default App;
