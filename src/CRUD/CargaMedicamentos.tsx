
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
//import medicamentosData from "../mocks/medicamento.json";

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

interface Medicamento {
  code: string;
  nombre: string;
  presentacion: string;
  precio: number;
}
const formSchema = z.object({
  code: z.string(),
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 letras.",
  }),
  presentacion: z.string().max(15),
  precio: z.string().transform((val) => parseInt(val, 10) || 0),
})

function CargaMedicamentos() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      nombre: "",
      presentacion: "",
      precio: 0,
    },
  });
  //Añadir medicina a la tabla

  const [medicamento, setMedicamento] = useState<Medicamento[]>([]);

  // Función para obtener datos de la API
  const fetchMedicamento = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/medicamento"); // Ajusta la URL según tu backend
      setMedicamento(response.data); // Asigna los datos obtenidos al estado
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  // Cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchMedicamento();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Datos enviados:", values); // <-- Añadir este console.log
    try {
      const response = await axios.post("http://localhost:4000/api/medicamento", values);
      console.log("Empleado registrado:", response.data);

      fetchMedicamento(); // Recargar la lista de empleados
      form.reset();
    } catch (error) {
      console.error("Error al registrar empleado:", error);
    }
  };


  return (
    <div className="text-center">
      <div>
        <h1>Registrar Medicamento</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col py-5 space-y-2 ">

            <div className="flex space-x-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="code"
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
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese el nombre" {...field} />
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
                  name="presentacion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Presentacion</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese la presentacion" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="precio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>precio</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese el precio" {...field} />
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

      <h2>Medicamentos Registrados</h2>
      <Table className="w-full table-auto">
        <TableCaption>Tabla de medicinas.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Codigo</TableHead>
            <TableHead className="text-center">Nombre</TableHead>
            <TableHead className="text-center">Presentacion</TableHead>
            <TableHead className="text-center">Precio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicamento.map((medicamento) => (
            <TableRow key={medicamento.code}>
              <TableCell className="font-medium">{medicamento.code}</TableCell>
              <TableCell>{medicamento.nombre}</TableCell>
              <TableCell>{medicamento.presentacion}</TableCell>
              <TableCell>{medicamento.precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Aquí va el contenido de tu panel de administración */}
    </div>
  );
}

export default CargaMedicamentos;
