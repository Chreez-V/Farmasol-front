import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import FormularioPedido from "../components/FormularioPedido";
import { Pedido } from "../types";
import useMedicamentos from "../hooks/useMedicamentos";

function Compras() {
  const { medicamentos } = useMedicamentos();
  const medicamentosDisponibles = medicamentos;
  const handlePedidoAdded = (nuevoPedido: Pedido) => {
    // Maneja el nuevo pedido (por ejemplo, agrégalo a la lista)
    console.log("Nuevo pedido añadido:", nuevoPedido);
  };
  return (
    <div>
      <h1>Realizar Pedido</h1>
      <FormularioPedido
        onPedidoAdded={handlePedidoAdded}
        medicamentosDisponibles={medicamentosDisponibles}
      />
      {/* Aquí va el contenido de tu panel de administración */}
      <h2>Compras Realizadas</h2>
      <Table className="w-full table-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Codigo</TableHead>
            <TableHead className="text-center">Nombre A. de compras</TableHead>
            <TableHead className="text-center">Telefono</TableHead>
            <TableHead className="text-center">Direccion</TableHead>
            <TableHead className="text-right">Forma Pago</TableHead>
            <TableHead className="text-right">Estatus</TableHead>
            <TableHead className="text-right">Productos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicamentos.map((medicamento) => (
            <TableRow key={medicamento.id}>
              <TableCell className="font-medium">{medicamento.id}</TableCell>
              <TableCell>{medicamento.name}</TableCell>
              <TableCell>{medicamento.description}</TableCell>
              <TableCell>{medicamento.quantity}</TableCell>
              <TableCell>{medicamento.laboratory}</TableCell>
              <TableCell className="text-right">{medicamento.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Compras;
