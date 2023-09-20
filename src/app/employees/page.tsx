import { Employee, columns } from "../../components/Table/columns"
import { DataEmployees } from "../../components/Table/data-table";



 
async function getData(): Promise<Employee[]> {  
      // Fetch data from your API here. 
  return [ 
    {
        id: 14225323,
        name: "Pedro Martinez",
        patron:"Banco Unido",
        business_name: "Banco Unido, S.A",
        tel1: "50763257891",
        tel2: "50765796352",
        salary: "$2000.00",   
      },
      {
        id: 25638572,
        name: "Carlos Paz",
        patron:"Banco Fichosa",
        business_name: "Banco Fichosa, S.A",
        tel1: "50766879625",
        tel2: "50765784123",
        salary: "$2150.00",   
      },
      {
        id: 36521478,
        name: "Maria Castillo",
        patron:"Petroautos",
        business_name: "Petroautos, S.A",
        tel1: "50763895214",
        tel2: "50769854512",
        salary: "$1950.00",   
      }
    // ...
  ]
}

 
export default async function DemoPage() {
  const data = await getData(); // hace petición de datos a la BDD
    return (
    <div className="w-full mx-auto py-10">
        
      <DataEmployees columns={columns} data={data} />
    </div>
  )
}