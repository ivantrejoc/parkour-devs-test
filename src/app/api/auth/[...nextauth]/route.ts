import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";


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