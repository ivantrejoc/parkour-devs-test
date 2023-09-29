import { FC, ReactNode } from "react";


interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-200 h-[80%] w-[45%] md:max-h-[80%] md:max-w-[55%] p-2 items-center justify-center rounded-xl">
      {children}
    </div>
  );
};

export default AuthLayout;
