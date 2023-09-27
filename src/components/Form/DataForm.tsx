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

export const EmployeeSchema = z.object({
  cedula: z.string().regex(new RegExp(/^[0-9]+$/), "Identificación must be a number").min(1, "Cédula is required").max(10),
  name: z.string().regex(new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/), "Name must have only letters").min(1, "Name is required"),
  patron: z.string().min(1, "Patron is required"),
  business_name: z.string().min(1, "Business name is required"),
  tel1: z.string().regex(new RegExp(/^[0-9]+$/), "Tel1 must must be a number").min(1, " Tel1 is required").max(20),
  tel2: z.string().regex(new RegExp(/^[0-9]+$/), "Tel2 must must be a number").min(1, "Tel2 is required").max(20),
  salary: z
    .string().regex(new RegExp(/^(\d*\.)?\d+$/), "Salary must have 2 decimals").min(1, "Salary is required"),
});

// Componente form
const DataForm = () => {
  const router = useRouter(); // hook de next para direccionar a una ruta específica
  const form = useForm<z.infer<typeof EmployeeSchema>>({
    resolver: zodResolutor(EmployeeSchema),
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
  const onSubmit = async (values: z.infer<typeof EmployeeSchema>) => {
    console.log("ESTO ES LO QUE ESTÁ LLEGANDO A onSubmit", values);
    const { cedula, name, patron, business_name, tel1, tel2, salary } =
      EmployeeSchema.parse(values);

    const response = await fetch("http://localhost:3000/api/data-employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cedula: cedula,
        name: name,
        patron: patron,
        business_name: business_name,
        tel1: tel1,
        tel2: tel2,
        salary: salary,
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
      <div className="p-0">
        <h2 className="text-gray-900 text-lg  mb-2">Create new Employee</h2>
        <form
          className="w-full max-w-screen-xl h-auto mx-auto mt-0 grid grid-cols-2 grid-rows-4 gap-4 p-0"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="cedula"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Identification
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    placeholder="1234125..."
                    {...field}
                  />
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
                <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    placeholder="Jhon Doe"
                    {...field}
                  />
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
                <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Patron
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    placeholder="Super 99"
                    {...field}
                  />
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
                <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Business name
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tel1
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    placeholder="+50760892456"
                    {...field}
                  />
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
                <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tel2
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    placeholder="+50760892456"
                    {...field}
                  />
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
                <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Salary
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py- text-center mt-8 mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Create Register
          </Button>
        </form>
      </div>
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
