import React, { useState } from "react";
import { Medicamento } from "../types"; // Asegúrate de que la ruta sea correcta

interface FormularioMedicamentoProps {
  onMedicamentoAdded: (nuevoMedicamento: Medicamento) => void;
}

const FormularioMedicamento: React.FC<FormularioMedicamentoProps> = ({
  onMedicamentoAdded,
}) => {
  const [nuevoMedicamento, setNuevoMedicamento] = useState<Medicamento>({
    id: 0, // Se generará en el backend
    name: "",
    description: "",
    quantity: 0,
    laboratory: "",
    price: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNuevoMedicamento({
      ...nuevoMedicamento,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://TU_API_URL/medicamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoMedicamento),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Medicamento = await response.json();
      onMedicamentoAdded(data);
      setNuevoMedicamento({
        id: 0,
        name: "",
        description: "",
        quantity: 0,
        laboratory: "",
        price: 0,
      });
    } catch (error) {
      console.error("Error al añadir medicamento:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={nuevoMedicamento.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Descripción:
        <textarea
          name="description"
          value={nuevoMedicamento.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Cantidad:
        <input
          type="number"
          name="quantity"
          value={nuevoMedicamento.quantity}
          onChange={handleChange}
        />
      </label>
      <label>
        Laboratorio:
        <input
          type="text"
          name="laboratory"
          value={nuevoMedicamento.laboratory}
          onChange={handleChange}
        />
      </label>
      <label>
        Precio:
        <input
          type="number"
          name="price"
          value={nuevoMedicamento.price}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Añadir Medicamento</button>
    </form>
  );
};

export default FormularioMedicamento;
