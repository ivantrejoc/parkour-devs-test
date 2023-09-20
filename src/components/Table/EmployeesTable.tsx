import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const EmployeesTable = () => {
  const dataEmployees = [
    {
      cedula: "1422582",
      name: "Jose Perez",
      patron: "Banco fichosa",
      business_name: "Banco fichosa S.A",
      tel1: "50760760862",
      tel2: "50761729850",
      salary: "$250.00",
    },

    {
      cedula: "52885221",
      name: "Maria Castillo",
      patron: "Banco unido",
      business_name: "Banco Unido S.A",
      tel1: "50765237896",
      tel2: "50763215478",
      salary: "$300.00",
    },
  ];

  return (
    // <div className="w-[90%] mx-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-lg font-bold">Identification</TableHead>
          <TableHead className="w-[100px] text-lg font-bold">Name</TableHead>
          <TableHead className="w-[100px] text-lg font-bold">Patron</TableHead>
          <TableHead className="w-[100px] text-lg font-bold">Business name</TableHead>
          <TableHead className="text-right w-[100px] text-lg font-bold">Tel1</TableHead>
          <TableHead className="text-right w-[100px] text-lg font-bold">Tel2</TableHead>
          <TableHead className="text-right w-[100px] text-lg font-bold">Salary</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataEmployees.map((e) => {
          return (
            <TableRow key={e.cedula}>
              <TableCell className="font-normal">{e.cedula}</TableCell>
              <TableCell className="font-normal">{e.name}</TableCell>
              <TableCell className="font-normal">{e.patron}</TableCell>
              <TableCell className="font-normal">{e.business_name}</TableCell>
              <TableCell className="text-right">{e.tel1}</TableCell>
              <TableCell className="text-right">{e.tel2}</TableCell>
              <TableCell className="text-right">{e.salary}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    // </div>
  );
};

export default EmployeesTable;
