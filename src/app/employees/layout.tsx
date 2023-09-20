import { FC, ReactNode } from "react";


interface EmployeesLayoutProps {

    children: ReactNode;
}
const EmployeesLayout: FC<EmployeesLayoutProps>= ({ children }) => {
  return (
    <div className="bg-slate-200 p-10 rounded-xl w-[60%] container mx-auto py-10 justify-center ">{children}</div>
  )
}

export default EmployeesLayout;