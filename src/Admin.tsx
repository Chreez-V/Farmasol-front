import DashboardSidebar from "./CRUD/DashboardSidebar";
import { Routes, Route } from "react-router-dom";
import IngresoPersonal from "./CRUD/IngresoPersonal.tsx";
import CargaMedicamentos from "./CRUD/CargaMedicamentos.tsx";
import Laboratorios from "./CRUD/Laboratorios.tsx";
import Sucursales from "./CRUD/Sucursales.tsx";
import Compras from "./CRUD/Compras.tsx";


function Admin() {
  return (
    <div className="flex">
      <div className="h-screen">
        <DashboardSidebar />
      </div>
      <div className="flex-grow p-6 mx-20">
        <Routes>
          <Route path="/" element="Inicio" />
          <Route path="IngresoPersonal" element={<IngresoPersonal />} />
          <Route path="carga-medicamentos" element={<CargaMedicamentos />} />
          <Route path="laboratorios" element={<Laboratorios />} />
          <Route path="sucursales" element={<Sucursales />} />
          <Route path="compras" element={<Compras />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
