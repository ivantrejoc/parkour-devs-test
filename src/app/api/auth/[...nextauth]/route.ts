import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import * as z  from "zod";

const SignUpSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().regex( new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/), "Password must have between 8 and 16 characters, 1 digit, at least one lowercase, at list one uppercase").min(8, "Password is too short").max(16, "Password is too long"),
  confirmPassword: z.string().min(1, "Password confirm is required")
})
.refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Password do not match"
})


const handler = NextAuth({
    pages:{
        signIn:"/sign-in"
    },
    providers: [
        CredentialsProvider({
          
          name: 'Credentials',
          
          credentials: {},
          async authorize(credentials): Promise<any> {
            console.log( "ESTAS SON LAS CREDENCIALES QUE VIENEN DEL FORM",credentials);
           return await signInWithEmailAndPassword(auth, (credentials as any).email || "", (credentials as any).password || "")
           .then(userCredential =>{
            if(userCredential.user){
                return userCredential.user;
            }
            return null;
           })
           .catch(error => console.log(error))
          }
        })
      ]
})

export { handler as GET, handler as POST }