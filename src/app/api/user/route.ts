// RUTAS QUERYS A LA BDD

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt"
import * as z from "zod";
import { json } from "node:stream/consumers";


// validaciones de los inputs

const userSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have 8 characters"),
    
  })
 
  export async function GET() {
    return NextResponse.json({message:"success"})
  }

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    //valida si email existe

    const checkExistingEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (checkExistingEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exist" },
        { status: 409 }
      );
    }

    //valida si username existe

    const checkExistingUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (checkExistingUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exist" },
        { status: 409 }
      );
    }

    //encriptación contraseña

    const hashedPassword = await hash(password, 10)

    //registro de nuevo usuario

    const newUSer = await db.user.create({
      data: {
        username: username,
        email: email,       
        password: hashedPassword,
      },
    });

    //extraemos password y solo retornamos un json con el resto de los datos del user
    const { password: newUserPassword, ...rest} = newUSer;

    return NextResponse.json({ user: rest, message: "Used created successfully"}, { status: 201});
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong"}, { status: 500});
  }
}
