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

interface Empleado {
  idempleado: number;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  direccion: string;
}


const formSchema = z.object({
  idempleado: z.string().transform((val) => parseInt(val, 10) || 0),
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 letras.",
  }),
  apellido: z.string().min(2, {
    message: "El apellido debe tener al menos 2 letras.",
  }),
  telefono: z.string().max(15),
  direccion: z.string().min(2),
  email: z.string().min(2),
})




function IngresoPersonal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      direccion: "",
      email: "",
    },
  });

  //Añadir personal a la tabla

  const [empleado, setEmpleado] = useState<Empleado[]>([]);

  // Función para obtener datos de la API
  const fetchEmpleado = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/empleado"); // Ajusta la URL según tu backend
      setEmpleado(response.data); // Asigna los datos obtenidos al estado
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  // Cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchEmpleado();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Datos enviados:", values); // <-- Añadir este console.log
    try {
      const response = await axios.post("http://localhost:4000/api/empleado", values);
      console.log("Empleado registrado:", response.data);

      fetchEmpleado(); // Recargar la lista de empleados
      form.reset();
    } catch (error) {
      console.error("Error al registrar empleado:", error);
    }
  };

  const deleteEmpleado = async (idempleado: number) => {
    try {
      await axios.delete(`http://localhost:4000/api/empleado/${idempleado}`);
      console.log("Empleado eliminado:", idempleado);
      fetchEmpleado(); // Recargar la lista actualizada después de eliminar
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  return (
    <div className="text-center">
      <div>
        <h1>Registrar Personal</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col py-5 space-y-2 ">

            <div className="w-full">
              <FormField
                control={form.control}
                name="idempleado"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>codigo</FormLabel>
                    <FormControl>
                      <Input className="w-full" placeholder="Ingrese el nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex space-x-4">
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
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="apellido"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese el apellido" {...field} />
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
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese el email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex space-x-4 place-items-center">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="direccion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Direccion</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese Direccion del empleado" {...field} />
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
      <div>
        <h1>Personal Registrado</h1>
        <Table className="w-full table-auto">

          <TableCaption>Lista de empleados.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Codigo</TableHead>
              <TableHead className="text-center">Nombre</TableHead>
              <TableHead className="text-center">Apellido</TableHead>
              <TableHead className="text-center">Telefono</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Direccion</TableHead>
              <TableHead className="text-center">Ficha</TableHead>
              <TableHead className="text-center">Editar</TableHead>
              <TableHead className="text-center">Eliminar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {empleado.map((empleado) => (
              <TableRow key={empleado.idempleado}>
                <TableCell className="font-medium">{empleado.idempleado}</TableCell>
                <TableCell>{empleado.nombre}</TableCell>
                <TableCell>{empleado.apellido}</TableCell>
                <TableCell>{empleado.telefono}</TableCell>
                <TableCell>{empleado.email}</TableCell>
                <TableCell>{empleado.direccion}</TableCell>
                <TableCell><Button>VerFicha</Button></TableCell>
                <TableCell><Button>Editar</Button></TableCell>
                <TableCell><Button onClick={() => deleteEmpleado(empleado.idempleado)} >Eliminar</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Aquí va el contenido de tu panel de administración */}
      </div>

    </div>
  );
}

export default IngresoPersonal;
