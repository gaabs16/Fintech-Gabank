import './App.css';
import Header from './componentes/sessao1';
import Acesso from './componentes/sessao2';
import Solucoes from './componentes/sessao3';
import Missoes from './componentes/sessao4';
import Footer from './componentes/footer';
import Sobre from './componentes/sobre';

function App() {
  return (
    <div className="App">
      <Header />
      <Acesso />
      <Solucoes />
      <Missoes />
      <Footer />
      <Sobre />
    </div>
  );
}

export default App;
