import React, { useState } from "react";
import { Personal } from "../types"; // Asegúrate de que la ruta sea correcta

interface FormularioPersonalProps {
  onPersonalAdded: (nuevoPersonal: Personal) => void;
}

const FormularioPersonal: React.FC<FormularioPersonalProps> = ({
  onPersonalAdded,
}) => {
  const [nuevoPersonal, setNuevoPersonal] = useState<Personal>({
    id: 0,
    name: "",
    lastname: "",
    headquarter: "",
    ficha: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNuevoPersonal({
      ...nuevoPersonal,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPersonalAdded(nuevoPersonal);
    setNuevoPersonal({
      id: 0,
      name: "",
      lastname: "",
      headquarter: "",
      ficha: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Código:
        <input
          type="text"
          name="codigo"
          value={nuevoPersonal.id}
          onChange={handleChange}
        />
      </label>
      <label>
        Nombre:
        <input
          type="text"
          name="Nombre"
          value={nuevoPersonal.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          name="Apellido"
          value={nuevoPersonal.lastname}
          onChange={handleChange}
        />
      </label>
      <label>
        Sucursal:
        <input
          type="text"
          name="Sucursal"
          value={nuevoPersonal.headquarter}
          onChange={handleChange}
        />
      </label>
      <label>
        Ficha:
        <input
          type="text"
          name="Ficha"
          value={nuevoPersonal.ficha}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Añadir Personal</button>
    </form>
  );
};

export default FormularioPersonal;
