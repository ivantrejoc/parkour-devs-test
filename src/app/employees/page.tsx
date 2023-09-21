import { Employee, columns } from "../../components/Table/columns"
import { DataEmployees } from "../../components/Table/data-table";




async function getData(): Promise<Employee[]> {
  try {
    const response = await fetch("http://localhost:3000/api/data-employees", {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      
      throw new Error (`No data available: ${response.status}`);
    }

    const rowData = await response.json();
    console.log("ESTO ES LO QUE ESTÁ RESPONDIENDO LA BDD:",rowData);
    const {employees} = rowData;  

    return employees;
  } catch (error) {
    
    console.error("Something went wrong:", error);
    throw error;
  }
}


export default async function DemoPage() {
  const dataTable = await getData(); // hace petición de datos a la BDD
     return (
    <div className="w-full mx-auto py-10">

      <DataEmployees columns={columns} data={dataTable} />
    </div>
  )
}