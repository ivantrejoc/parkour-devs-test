import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const employeeSchema = z
  .object({
    cedula: z.string().min(10, "Cédula is required").max(100),
    name: z.string().min(1, "Name is required").max(150),
    patron: z
      .string()
      .min(1, "Patron is required")
      .max(150),
      business_name:z
      .string()
      .min(1, "Business name is required")
      .max(150),
      tel1: z.number().min(1, "Tel1 is required").max(100),
      tel2: z.number().min(1, "Tel2 is required").max(100),
      salary: z.number().min(1, "Salary is required").max(100),
  })

export async function GET(req:Request) {
    try {
    
        const employees = await db.employee.findMany();
        if (employees) {
          return NextResponse.json(
            { employees },
            { status: 200 }
          );
        }
      } catch (error) {
        return NextResponse.json({ message: "Something went wrong"}, { status: 500});
      }    
}

export async function POST(req:Request) {
    
        const body = await req.json();
        console.log(body);
        return NextResponse.json({message:"todo esta ok"})

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
    
    




