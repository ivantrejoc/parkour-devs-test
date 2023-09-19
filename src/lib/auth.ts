import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";

//providers viene de la documentación de nextAuth.js este caso es para gestionar credenciales.
export const authOptions: NextAuthOptions = {

    //adaptador de prisma
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    //declaramos las rutas que queremos invocar acá
    pages: {
        signIn: "/sign-in", 
    },
    providers: [
        CredentialsProvider({
                   name: 'Credentials',
          
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@mail.com" }, // OJO LOS INPUTS DEBEN TENER LOS MISMOS ATRIBUTOS QUE EL FORM DE LOGIN
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            console.log(credentials);
            //valida si falta algúno de los inputs

            if(!credentials?.email || !credentials?.password){
                return null;
            }

            //busca en BDD si el usuario existe
            const existingUser = await db.user.findUnique({
                where: { email: credentials?.email }
            });
            if(!existingUser){
                return null;
            }

            //valida si el password es correcto
            const passwordMatch = await compare(credentials.password, existingUser.password);
            if(!passwordMatch){
                return null;
            }          

            return {
                id:`${existingUser.id}`,
                username: existingUser.username,
                email: existingUser.email
            }
            // const res = await fetch("/your/endpoint", {
            //   method: 'POST',
            //   body: JSON.stringify(credentials),
            //   headers: { "Content-Type": "application/json" }
            // })
            // const user = await res.json()
      
            // If no error and we have user data, return it
            // if (res.ok && user) {
            //   return user
            // }
            // Return null if user data could not be retrieved
            // return null
          }
        })
      ]
}