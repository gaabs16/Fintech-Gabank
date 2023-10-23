import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Sobre from './componentes/sobre';
import Tudo from './componentes/tudo';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Tudo />} />
          <Route path='/Sobre' element={<Sobre />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
