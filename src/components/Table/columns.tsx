"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export type Employee = {
  cedula: number;
  name: string;
  patron: string;
  business_name: string;
  tel1: string;
  tel2: string;
  salary: string;
};

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
];
