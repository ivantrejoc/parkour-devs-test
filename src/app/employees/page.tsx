"use client";
import { Employee, columns } from "../../components/Table/columns";
import { DataEmployees } from "../../components/Table/data-table";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DemoPage() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    },
  });

  const [dataTable, setDataTable] = useState<Employee[]>([]);

  async function getData(): Promise<Employee[]> {
    try {
      const response = await fetch("http://localhost:3000/api/data-employees", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        alert(`No data available: ${response.status}`);
      }
      const rowData = await response.json();
      const { employees } = rowData;

      return employees;
    } catch (error) {
      console.error("Something went wrong:", error);
      throw error;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setDataTable(data);
      } catch (error) {
        console.error("Something went wrong:", error);
        throw error;
      }
    }
    fetchData();
  }, []);

    return (
    <div className="h-[70%] w-full mx-auto my-auto">
      <DataEmployees columns={columns} data={dataTable} />
    </div>
  );
}
