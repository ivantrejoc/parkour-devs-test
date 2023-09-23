import { Navbar } from "@/components/Navbar";
import { FC, ReactNode } from "react";

interface EmployeesLayoutProps {
  children: ReactNode;
}
const EmployeesLayout: FC<EmployeesLayoutProps> = ({
  children,
}: EmployeesLayoutProps) => {
  return (
    <div
      className="bg-gray-400 p-56  mx-2 my-2 rounded-xl 
 flex items-center justify-center "
    >
      <Navbar />
      {children}
    </div>
  );
};

export default EmployeesLayout;
