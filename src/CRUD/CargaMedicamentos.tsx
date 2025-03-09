import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
//import medicamentosData from "../mocks/medicamento.json";
import useMedicamentos from "../hooks/useMedicamentos";
import FormularioMedicamento from "../components/FormularioMedicamento";
import { Medicamento } from "../types";

function CargaMedicamentos() {
  // hook para solicitar los datos a la api
  const { medicamentos } = useMedicamentos();
  const handleMedicamentoAdded = (nuevoMedicamento: Medicamento) => {
    // Maneja el nuevo medicamento (por ejemplo, agrégalo a la lista)
    console.log("Nuevo medicamento añadido:", nuevoMedicamento);
  };

  return (
    <div className="text-center">
      <h1>Ingreso de Medicamentos</h1>
      <FormularioMedicamento onMedicamentoAdded={handleMedicamentoAdded} />

      <h2>Medicamentos Registrados</h2>
      <Table className="w-full table-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Codigo</TableHead>
            <TableHead className="text-center">Nombre</TableHead>
            <TableHead className="text-center">descripcion</TableHead>
            <TableHead className="text-center">cantidad</TableHead>
            <TableHead className="text-right">Laboratorio</TableHead>
            <TableHead className="text-right">precio</TableHead>
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
      {/* Aquí va el contenido de tu panel de administración */}
    </div>
  );
}

export default CargaMedicamentos;
