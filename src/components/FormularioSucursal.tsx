import React, { useState } from "react";
import { Sucursal } from "../types";

interface FormularioSucursalProps {
  onSucursalAdded: (nuevaSucursal: Sucursal) => void;
}

const FormularioSucursal: React.FC<FormularioSucursalProps> = ({
  onSucursalAdded,
}) => {
  const [nuevaSucursal, setNuevaSucursal] = useState<Sucursal>({
    id: "",
    name: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNuevaSucursal({
      ...nuevaSucursal,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSucursalAdded(nuevaSucursal);
    setNuevaSucursal({
      id: "",
      name: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={nuevaSucursal.id}
          onChange={handleChange}
        />
      </label>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={nuevaSucursal.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Dirección:
        <input
          type="text"
          name="address"
          value={nuevaSucursal.address}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Añadir Sucursal</button>
    </form>
  );
};

export default FormularioSucursal;
