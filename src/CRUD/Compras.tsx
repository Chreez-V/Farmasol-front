import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { useEffect, useState } from "react";
import axios from 'axios';
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

import { Button } from "../components/ui/button.tsx";

interface Compra {

  id: number;
  pedido: number;
  fecha: string;
  formapago: string;
}

const formSchema = z.object({
  id: z.string().transform((val) => parseInt(val, 10) || 0),
  pedido: z.string().transform((val) => parseInt(val, 10) || 0),
  fecha: z.string(),
  formapago: z.string().min(2),
})

function Compras() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 0,
      pedido: 0,
      fecha: undefined,
      formapago: "",
    },
  });

  const [compra, setCompra] = useState<Compra[]>([]);

  // Función para obtener datos de la API
  const fetchCompra = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/compra"); // Ajusta la URL según tu backend
      setCompra(response.data); // Asigna los datos obtenidos al estado
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  // Cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchCompra();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Datos enviados:", values); // <-- Añadir este console.log
    try {
      const response = await axios.post("http://localhost:4000/api/compra", values);
      console.log("Empleado registrado:", response.data);

      fetchCompra(); // Recargar la lista de empleados
      form.reset();
    } catch (error) {
      console.error("Error al registrar empleado:", error);
    }
  };

  return (
    <div className="text-center">
      <div>
        <h1>Registrar Compra</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col py-5 space-y-2 ">

            <div className="flex space-x-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="id"
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
                  name="pedido"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Numero del pedido</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese el pedido" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="fecha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese la fecha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="formapago"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Forma de pago</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese la forma de pago" {...field} />
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
      <h1>Tabla Compras</h1>
      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Codigo</TableHead>
            <TableHead className="text-center">Num. Pedido</TableHead>
            <TableHead className="text-center">Fecha</TableHead>
            <TableHead className="text-center">forma de pago</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {compra.map((compra) => (
            <TableRow key={compra.id}>
              <TableCell className="font-medium">{compra.id}</TableCell>
              <TableCell>{compra.pedido}</TableCell>
              <TableCell>{compra.fecha}</TableCell>
              <TableCell>{compra.formapago}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Compras;
