import laboratorios from "../mocks/laboratory.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Laboratorio } from "../types";
function Laboratorios() {
  return (
    <div className="text-center">
      <h1>Laboratorios Asociados</h1>

      <Table className="w-full table-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Codigo</TableHead>
            <TableHead className="text-center">Nombre</TableHead>
            <TableHead className="text-center">Logo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {laboratorios.map((laboratorios) => (
            <TableRow key={laboratorios.id}>
              <TableCell className="font-medium">{laboratorios.id}</TableCell>
              <TableCell>{laboratorios.name}</TableCell>

              <TableCell>{laboratorios.imageUrl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Aquí va el contenido de tu panel de administración */}
    </div>
  );
}

export default Laboratorios;
