"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect } from "next/navigation";

export type Employee = {
  id: number;
  cedula: string;
  name: string;
  patron: string;
  business_name: string;
  tel1: string;
  tel2: string;
  salary: string;
};

export default async function deleteRegister(employeeCedula: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/data-employees/${employeeCedula}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //si recibe un status 200 envía alert de registro exitoso, caso contrario alerta de un error
    if (response.ok) {
      alert("Register Deleted");
     
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
    return false;
  }
}



export const columns: ColumnDef<Employee>[] = [
  
  {
    accessorKey: "cedula",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "patron",
    header: "Patron",
  },
  {
    accessorKey: "business_name",
    header: "Business Name",
  },
  {
    accessorKey: "tel1",
    header: "Tel1",
  },
  {
    accessorKey: "tel2",
    header: "Tel2",
  },
  {
    accessorKey: "salary",

    cell: ({ row }) => {
      const salary = parseFloat(row.getValue("salary"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(salary);

      return <div className="text-right font-medium">{formatted}</div>;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Salary
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const employee = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-200" align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => deleteRegister(employee.cedula)}>
              Delete register
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
