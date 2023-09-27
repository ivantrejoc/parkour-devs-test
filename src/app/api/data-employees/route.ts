import { db } from "../../../lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";

export const EmployeeSchema = z.object({
  cedula: z
    .string()
    .regex(new RegExp(/^[0-9]+$/), "Identificación must be a number")
    .min(1, "Cédula is required")
    .max(10),
  name: z
    .string()
    .regex(
      new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/),
      "Name must have only letters"
    )
    .min(1, "Name is required"),
  patron: z.string().min(1, "Patron is required"),
  business_name: z.string().min(1, "Business name is required"),
  tel1: z
    .string()
    .regex(new RegExp(/^[0-9]+$/), "Tel1 must must be a number")
    .min(1, " Tel1 is required")
    .max(20),
  tel2: z
    .string()
    .regex(new RegExp(/^[0-9]+$/), "Tel2 must must be a number")
    .min(1, "Tel2 is required")
    .max(20),
  salary: z
    .string()
    .regex(new RegExp (/^(\d*\.)?\d+$/),
      "Salary must be a number with 2 decimals"
    )
    .min(1, "Salary is required")
    .max(10),
});

export async function GET(req: Request) {
  try {
    const employees = await db.employee.findMany({
      select: {
        id: true,
        cedula: true,
        name: true,
        patron: true,
        business_name: true,
        tel1: true,
        tel2: true,
        salary: true,
      },
    });
    if (employees) {
      return NextResponse.json({ employees }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("ESTO ES LO QUE ESTÁ LLEGANDO DEL FORM", body);

    const { cedula, name, patron, business_name, tel1, tel2, salary } =
      EmployeeSchema.parse(body);

    const newEmployee = await db.employee.create({
      data: {
        cedula: cedula,
        name: name,
        patron: patron,
        business_name: business_name,
        tel1: tel1,
        tel2: tel2,
        salary: salary,
      },
    });
    return NextResponse.json(
      { message: "Employee created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
