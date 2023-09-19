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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

//Esquema de estructura y validaciones del form
const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have 8 characters"),
});

const SignInForm = () => {
  const router = useRouter(); // hook de nextJS para despacho de rutas
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolutor(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //handler de envío de form
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      //especificar el provider de auth.ts como parámtero
      const signInData = await signIn("credentials", {
        email: values.email,
        password: values.password,
      });
      console.log("ESTOS SON LOS DATOS QUE VIENEN DE AUTH", signInData);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
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
        </div>

        <Button className="w-full mt-6 bg-black text-white" type="submit">
          Sign in
        </Button>

        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        <GoogleSignInButton>Sign in with Google</GoogleSignInButton>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you don´t have an account, please
          <Link className="text-blue-500 hover:underline" href="sign-up">
            {" "}
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignInForm;

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
