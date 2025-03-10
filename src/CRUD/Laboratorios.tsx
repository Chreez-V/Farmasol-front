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

interface Laboratorios {

  rif: string;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

const formSchema = z.object({
  rif: z.string(),
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 letras.",
  }),
  direccion: z.string().min(2),
  telefono: z.string().max(18),
  email: z.string().min(2),
})

function Laboratorios() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rif: "",
      nombre: "",
      direccion: "",
      telefono: "",
      email: "",
    },
  });

  const [laboratorios, setLaboratorios] = useState<Laboratorios[]>([]);

  // Función para obtener datos de la API
  const fetchLaboratorios = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/laboratorio"); // Ajusta la URL según tu backend
      setLaboratorios(response.data); // Asigna los datos obtenidos al estado
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  // Cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchLaboratorios();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Datos enviados:", values); // <-- Añadir este console.log
    try {
      const response = await axios.post("http://localhost:4000/api/laboratorio", values);
      console.log("Empleado registrado:", response.data);

      fetchLaboratorios(); // Recargar la lista de empleados
      form.reset();
    } catch (error) {
      console.error("Error al registrar empleado:", error);
    }
  };


  return (
    <div className="text-center">
      <div>
        <h1>Registrar Laboratorio</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col py-5 space-y-2 ">

            <div className="flex space-x-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="rif"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rif</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese el rif" {...field} />
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
                  name="direccion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Direccion</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese el direccion" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefono</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese el telefono" {...field} />
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese direccion de correo electronico" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex items-center">
                <Button type="submit" className="w-full">Submit</Button>
              </div>
            </div>
          </form>
        </Form>

      </div>

      <h1>Laboratorios Asociados</h1>

      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Rif</TableHead>
            <TableHead className="text-center">Nombre</TableHead>
            <TableHead className="text-center">direccion</TableHead>
            <TableHead className="text-center">telefono</TableHead>
            <TableHead className="text-center">email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {laboratorios.map((laboratorios) => (
            <TableRow key={laboratorios.rif}>
              <TableCell className="font-medium">{laboratorios.rif}</TableCell>
              <TableCell>{laboratorios.nombre}</TableCell>
              <TableCell>{laboratorios.direccion}</TableCell>
              <TableCell>{laboratorios.telefono}</TableCell>
              <TableCell>{laboratorios.email}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Aquí va el contenido de tu panel de administración */}
    </div>
  );
}

export default Laboratorios;
