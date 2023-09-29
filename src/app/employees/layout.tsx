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
      className="w-[90%] h-screen max-h-full flex items-center justify-center "
    >
      <Navbar />
      {children}
    </div>
  );
};

export default EmployeesLayout;
