import React, { useState } from "react";
import { Pedido, Medicamento } from "../types"; // Asegúrate de que la ruta sea correcta

interface FormularioPedidoProps {
  onPedidoAdded: (nuevoPedido: Pedido) => void;
  medicamentosDisponibles: Medicamento[]; // Lista de medicamentos para seleccionar
}

const FormularioPedido: React.FC<FormularioPedidoProps> = ({
  onPedidoAdded,
  medicamentosDisponibles,
}) => {
  const [nuevoPedido, setNuevoPedido] = useState<Pedido>({
    id: "",
    AnalistName: "",
    AnalistTelephone: 0,
    laboratory: "",
    PaymentForm: "",
    status: "Pendiente", // Estado inicial
    medsOrdered: [],
  });

  const [medicamentoSeleccionado, setMedicamentoSeleccionado] =
    useState<Medicamento | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNuevoPedido({
      ...nuevoPedido,
      [name]: name === "AnalistTelephone" ? parseInt(value) : value,
    });
  };

  const handleMedicamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const medicamentoId = e.target.value;
    const medicamento = medicamentosDisponibles.find(
      (med) => med.id.toString() === medicamentoId
    );
    setMedicamentoSeleccionado(medicamento || null);
  };

  const handleAgregarMedicamento = () => {
    if (medicamentoSeleccionado) {
      setNuevoPedido({
        ...nuevoPedido,
        medsOrdered: [...nuevoPedido.medsOrdered, medicamentoSeleccionado],
      });
      setMedicamentoSeleccionado(null); // Limpiar selección
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPedidoAdded(nuevoPedido);
    setNuevoPedido({
      id: "",
      AnalistName: "",
      AnalistTelephone: 0,
      laboratory: "",
      PaymentForm: "",
      status: "Pendiente",
      medsOrdered: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={nuevoPedido.id}
          onChange={handleChange}
        />
      </label>
      <label>
        Nombre del Analista:
        <input
          type="text"
          name="AnalistName"
          value={nuevoPedido.AnalistName}
          onChange={handleChange}
        />
      </label>
      <label>
        Teléfono del Analista:
        <input
          type="number"
          name="AnalistTelephone"
          value={nuevoPedido.AnalistTelephone}
          onChange={handleChange}
        />
      </label>
      <label>
        Laboratorio:
        <input
          type="text"
          name="laboratory"
          value={nuevoPedido.laboratory}
          onChange={handleChange}
        />
      </label>
      <label>
        Forma de Pago:
        <select
          name="PaymentForm"
          value={nuevoPedido.PaymentForm}
          onChange={handleChange}
        >
          <option value="">Seleccionar</option>
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta">Tarjeta</option>
          <option value="Transferencia">Transferencia</option>
        </select>
      </label>
      <label>
        Medicamentos:
        <select onChange={handleMedicamentoChange}>
          <option value="">Seleccionar Medicamento</option>
          {medicamentosDisponibles.map((med) => (
            <option key={med.id} value={med.id}>
              {med.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleAgregarMedicamento}>
          Agregar
        </button>
      </label>
      <ul>
        {nuevoPedido.medsOrdered.map((med) => (
          <li key={med.id}>{med.name}</li>
        ))}
      </ul>
      <button type="submit">Realizar Pedido</button>
    </form>
  );
};

export default FormularioPedido;
