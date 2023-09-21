import { db } from "../../../lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";

export const employeeSchema = z.object({
  cedula: z.string().min(1, "Id is required").max(12),
  name: z.string().min(1, "Name is required"),
  patron: z.string().min(1, "Patron is required"),
  business_name: z.string().min(1, "Business name is required"),
  tel1: z.string().min(1, " Tel1 is required"),
  tel2: z.string().min(1, "Tel2 is required"),
  salary: z.string().min(1, "Salary is required"),
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
       
    const { cedula, name, patron, business_name, tel1, tel2, salary } =
      employeeSchema.parse(body);

    //PROBLEMAS CON EL DATATYPE DE CÉDULA
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
// const {
//     cedula,
//     name,
//     patron,
//     business_name,
//     tel1,
//     tel2,
//     salary,
//   } = employeeSchema.parse();
//     const body = await req.json();
// const { cedula, name, patron, business_name, tel1, tel2, salary } = employeeSchema.parse(body);
//     const ExistingName = await db.employee.findUnique({
//     where: { name: name },
//   });

//   if (ExistingName) {
//     return NextResponse.json(
//       { employee: null, message: "This name already exist" },
//       { status: 409 }
//     );
//   }

//   const newEmployee = await db.employee.create({
//     data: {

//       patron,

//       business_name,
//     tel1,
//      tel2,
//      salary,

//     },
//   });
//   return NextResponse.json({ newEmployee, message: "Used created successfully"}, { status: 201});

// catch (error) {
//     return NextResponse.json({ message: "Something went wrong", error}, { status: 500});
// }
