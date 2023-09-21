import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface Params {
  params: { cedula: string };
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    const { cedula } = params;
    const deletedRegister = await db.employee.delete({
      where: {
        cedula: cedula,
      },
    });
    if(!cedula) return NextResponse.json({message: "Employee not found"}, {status: 404});
    
    return NextResponse.json(deletedRegister);   
    
  } catch (error) {
    return NextResponse.json(
        { message: "Something went wrong", error },
        { status: 500 }
      );
  }
}
