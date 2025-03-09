import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import FormularioSucursal from "../components/FormularioSucursal";
import sucursalesData from "../mocks/sucursal.json";
import { Sucursal } from "../types";
function Sucursales() {
  const handleSucursalAdded = (nuevaSucursal: Sucursal) => {
    // Maneja la nueva sucursal (por ejemplo, agrégala a la lista)
    console.log("Nueva sucursal añadida:", nuevaSucursal);
  };
  return (
    <div>
      <h1>Registrar Sucursal</h1>
      <FormularioSucursal onSucursalAdded={handleSucursalAdded} />
      {/* Aquí va el contenido de tu panel de administración */}
      <h2>Sucursales Registradas</h2>
      <Table className="w-full table-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Codigo</TableHead>
            <TableHead className="text-center">Nombre</TableHead>
            <TableHead className="text-center">direccion</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sucursalesData.map((sucursal) => (
            <TableRow key={sucursal.id}>
              <TableCell className="font-medium">{sucursal.id}</TableCell>
              <TableCell>{sucursal.name}</TableCell>
              <TableCell>{sucursal.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Sucursales;
