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
import GoogleSignInButton from "../ui/googleSignInButton";
import { useRouter } from "next/navigation"; // hook de next para direccionar a una ruta específica
import { send } from "process";

//Validaciones del form
const FormSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don´t match",
  });

// Handler del form
const SignUpForm = () => {
  const router = useRouter(); // hook de next para direccionar a una ruta específica
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolutor(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // envío de formulario. Funcíon asíncrona que hace un fetch a /api/user para envíar los datos contenidos en FormSchema
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/user", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    if(response.ok){    //si recibe un status 200 envía alert de registro exitoso, caso contrario alerta de un error
      alert("Successful Register")
      router.push("/sign-in");
    }
      
    else{
      alert("Registration failed");
      console.error("Registration failed");
    } 
  };

  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Jhondoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-enter your pasdword"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="w-full mt-6 bg-black text-white" type="submit">
          Sign in
        </Button>

        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        <GoogleSignInButton>Sign up with Google </GoogleSignInButton>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you have an account, please
          <Link className="text-blue-500 hover:underline" href="sign-in">
            {" "}
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignUpForm;

function zodResolver(
  FormSchema: z.ZodObject<
    { username: z.ZodString },
    "strip",
    z.ZodTypeAny,
    { username: string },
    { username: string }
  >
): import("react-hook-form").Resolver<{ username: string }, any> | undefined {
  throw new Error("Function not implemented.");
}
