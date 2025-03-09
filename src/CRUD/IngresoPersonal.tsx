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

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 letras.",
  }),
  apellido: z.string().min(2, {
    message: "El apellido debe tener al menos 2 letras.",
  }),
  telefono: z.number().lte(10),
  direccion: z.string().min(2),
  email: z.string().min(2),
  cargo: z.string().min(2),
})

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


function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values)
}

function IngresoPersonal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
    },
  });
  const handlePersonalAdded = (nuevoPersonal: Personal) => {
    console.log("Nuevo personal añadido:", nuevoPersonal);

  };
  return (
    <div className="text-center">
      <div>
        <h1>Registrar Personal</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col py-5 space-y-2 ">

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
                      <FormLabel>Telefono</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese el numero de telefono" {...field} />
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
                  name="cargo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Ingrese el cargo del empleado" {...field} />
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

          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Codigo</TableHead>
              <TableHead className="text-center">Nombre</TableHead>
              <TableHead className="text-center">Apellido</TableHead>
              <TableHead className="text-center">Sucursal</TableHead>
              <TableHead className="text-right">Ficha</TableHead>
              <TableHead className="text-center">Editar</TableHead>
              <TableHead className="text-center">Eliminar</TableHead>
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
                <TableCell><Button>Editar</Button></TableCell>
                <TableCell><Button>Eliminar</Button></TableCell>
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
