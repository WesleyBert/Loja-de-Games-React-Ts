import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListaCategoria from './components/categorias/ListaCategoria';
import FormularioCategoria from './components/categorias/FormularioCategoria';
import DeletarCategoria from './components/categorias/DeletarCategoria';

function App() {
  return (



    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastroCategorias" element={<FormularioCategoria />} />
            <Route path="/editarCategorias/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategorias/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;