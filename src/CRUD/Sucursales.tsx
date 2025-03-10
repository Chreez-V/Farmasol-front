
import axios from 'axios';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { Button } from "../components/ui/button.tsx";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"

import { useEffect, useState } from "react";

interface Sucursal {
  idsucursal: number;
  ciudad: number;
}


const formSchema = z.object({
  idsucursal: z.string().transform((val) => parseInt(val, 10) || 0),
  ciudad: z.string().transform((val) => parseInt(val, 10) || 0),
})

function Sucursales() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idsucursal: 0,
      ciudad: 0,
    },
  });

  const [sucursal, setSucursal] = useState<Sucursal[]>([]);

  // Función para obtener datos de la API
  const fetchSucursal = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/sucursal"); // Ajusta la URL según tu backend
      setSucursal(response.data); // Asigna los datos obtenidos al estado
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  // Cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchSucursal();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Datos enviados:", values); // <-- Añadir este console.log
    try {
      const response = await axios.post("http://localhost:4000/api/sucursal", values);
      console.log("Empleado registrado:", response.data);

      fetchSucursal(); // Recargar la lista de empleados
      form.reset();
    } catch (error) {
      console.error("Error al registrar empleado:", error);
    }
  };

  return (
    <div className='text-center'>
      <div>
        <h1>Registrar Sucursal</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col py-5 space-y-2 ">

            <div className="flex space-x-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="idsucursal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Codigo</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese el codigo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="ciudad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Codigo Ciudad</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese la ciudad" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-full flex items-center">
                <Button type="submit" className="w-full">Submit</Button>
              </div>
            </div>
          </form>
        </Form>

      </div>
      <h1>Sucursales registradas</h1>
      {/* Aquí va el contenido de tu panel de administración */}
      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Codigo Sucursal</TableHead>
            <TableHead className="text-center">Codigo Ciudad</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sucursal.map((sucursal) => (
            <TableRow key={sucursal.idsucursal}>
              <TableCell className="font-medium">{sucursal.idsucursal}</TableCell>
              <TableCell>{sucursal.ciudad}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Sucursales;
