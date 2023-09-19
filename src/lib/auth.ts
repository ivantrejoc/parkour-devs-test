import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";



//recibe los métodos de autenticación permitidos, puede generar un form de login o usar el que tengas creado
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt" //json web token
    },
    pages:{
        signIn: "/sign-in",
    },
    providers: [
        CredentialsProvider({
       
          name: "Credentials",
          
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jhon@mail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
           
            if(!credentials?.email || !credentials?.password){
                return null;
            }

            //valida si el user existe
            const existingUser = await db.user.findUnique({
                where: { email: credentials?.email}
            });
            if(!existingUser){
                return null;
            }

            //valida si la contraseña coincide compare es método de bycript
            const passwordMatch = await compare(credentials.password, existingUser.password)
           if(!passwordMatch){
            return null;
           }
           return {
            id: `${existingUser.id}`,
            username: existingUser.username,
            email: existingUser.email
           }
          }
        })
      ]

}