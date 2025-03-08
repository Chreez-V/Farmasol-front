import { useState, useEffect } from "react";
import { Medicamento } from "../types";
import medicamentosData from "../mocks/medicamento.json";

function useMedicamentos() {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    setMedicamentos(medicamentosData);
    // No se necesita fetch, los datos ya están disponibles en json
  }, []);

  return { medicamentos, cargando };

  /*para caundo se tenga el endpoint se modifica para que 
 reciba la direccion 
  useEffect(() => {
    fetch(archivoJson)
      .then((respuesta) => respuesta.json())
      .then((datos: Medicamento[]) => {
        setMedicamentos(datos);
        setCargando(false);
      });
  }, [archivoJson]);*/

  return { medicamentos, cargando };
}

export default useMedicamentos;
