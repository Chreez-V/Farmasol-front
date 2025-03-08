import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const personal = [
  {
    codigo: 1,
    Nombre: "Miguel",
    Apellido: "Nuñez",
    Sucursal: "Puerto Ordaz",
    Ficha: "Ver Ficha",
  },

  {
    codigo: "2",
    Nombre: "Miguel",
    Apellido: "Nuñez",
    Sucursal: "Puerto Ordaz",
    Ficha: "Ver Ficha",
  },
  {
    codigo: "3",
    Nombre: "Miguel",
    Apellido: "Nuñez",
    Sucursal: "Puerto Ordaz",
    Ficha: "Ver Ficha",
  },
  {
    codigo: "4",
    Nombre: "Miguel",
    Apellido: "Nuñez",
    Sucursal: "Puerto Ordaz",
    Ficha: "Ver Ficha",
  },
];

import { Personal } from "../types";
import FormularioPersonal from "../components/FormularioPersonal";

function IngresoPersonal() {
  const handlePersonalAdded = (nuevoPersonal: Personal) => {
    console.log("Nuevo personal añadido:", nuevoPersonal);
  };
  return (
    <div className="text-center">
      <h1>Personal Registrado</h1>
      <Table className="w-full table-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Codigo</TableHead>
            <TableHead className="text-center">Nombre</TableHead>
            <TableHead className="text-center">Apellido</TableHead>
            <TableHead className="text-center">Sucursal</TableHead>
            <TableHead className="text-right">Ficha</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {personal.map((codigo) => (
            <TableRow key={codigo.codigo}>
              <TableCell className="font-medium">{codigo.codigo}</TableCell>
              <TableCell>{codigo.Nombre}</TableCell>
              <TableCell>{codigo.Apellido}</TableCell>
              <TableCell>{codigo.Sucursal}</TableCell>
              <TableCell className="text-right">{codigo.Ficha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2>Ingreso de Personal</h2>
      <FormularioPersonal onPersonalAdded={handlePersonalAdded} />

      {/* Aquí va el contenido de tu panel de administración */}
    </div>
  );
}

export default IngresoPersonal;
