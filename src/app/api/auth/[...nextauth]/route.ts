import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";

const handler = NextAuth({
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        try {
          return await signInWithEmailAndPassword(
            auth,
            (credentials as any).email || "",
            (credentials as any).password || ""
          );
        } catch (error:any) {
          console.log(error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
