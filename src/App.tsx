import './App.css'
import Landing from './Landing.tsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importa los componentes de React Router
import Admin from './Admin.tsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Ruta para la página de administración */}
          <Route path="/admin" element={<Admin />} /> {/* Ruta para la página de administración */}
        </Routes>

      </Router >
    </>
  )
}

export default App
