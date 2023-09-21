"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver as zodResolutor } from "@hookform/resolvers/zod"; //importado así para resolver conflicto en const form
import * as z from "zod";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation"; // hook de next para direccionar a una ruta específica

//Esquema y Validaciones del form
export const employeeSchema = z.object({
  cedula: z.string().min(1, "Id is required").max(12),
  name: z.string().min(1, "Name is required"),
  patron: z.string().min(1, "Patron is required"),
  business_name: z.string().min(1, "Business name is required"),
  tel1: z.string().min(1, " Tel1 is required"),
  tel2: z.string().min(1, "Tel2 is required"),
  salary: z.string().min(1, "Salary is required"),
});

// Componente form
const DataForm = () => {
  const router = useRouter(); // hook de next para direccionar a una ruta específica
  const form = useForm<z.infer<typeof employeeSchema>>({
    resolver: zodResolutor(employeeSchema),
    defaultValues: {
      cedula: "",
      name: "",
      patron: "",
      business_name: "",
      tel1: "",
      tel2: "",
      salary: "",
    },
  });

  // envío de formulario. Funcíon asíncrona que hace un fetch a /api/user para envíar los datos contenidos en FormSchema
  const onSubmit = async (values: z.infer<typeof employeeSchema>) => {
    const response = await fetch("http://localhost:3000/api/data-employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cedula: values.cedula,
        name: values.name,
        patron: values.patron,
        business_name: values.business_name,
        tel1: values.tel1,
        tel2: values.tel2,
        salary: values.salary,
      }),
    });

    if (response.ok) {
      //si recibe un status 200 envía alert de registro exitoso, caso contrario alerta de un error
      alert("Successful Register");
      router.push("/employees");
    } else {
      alert("Registration failed");
      console.error("Registration failed");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2 w-[70%]">
          <FormField
            control={form.control}
            name="cedula"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identification</FormLabel>
                <FormControl>
                  <Input placeholder="1234125..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Jhon Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="patron"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Patron</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Super 99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="business_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="XLS Supermarket TLC"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tel1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tel1</FormLabel>
                <FormControl>
                  <Input type="text"
                   placeholder="+50760892456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tel2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tel2</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="+50760892456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="w-[30%] mt-6 bg-black text-white" type="submit">
          Create Employee
        </Button>
      </form>
    </Form>
  );
};

export default DataForm;

function zodResolver(
  EmployeeSchema: z.ZodObject<
    { name: z.ZodString },
    "strip",
    z.ZodTypeAny,
    { name: string },
    { name: string }
  >
): import("react-hook-form").Resolver<{ name: string }, any> | undefined {
  throw new Error("Function not implemented.");
}
