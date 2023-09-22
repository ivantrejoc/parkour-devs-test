import { FC, ReactNode } from "react";


interface EmployeesLayoutProps {
  children: ReactNode;
}
const EmployeesLayout: FC<EmployeesLayoutProps> = ({
  children,
}: EmployeesLayoutProps) => {
  return (
    <div className="bg-slate-200 p-10 rounded-xl w-[80%] container mx-auto py-10 justify-center ">
      {children}
    </div>
  );
};

export default EmployeesLayout;
