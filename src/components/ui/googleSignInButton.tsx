import { FC, ReactNode } from "react";
import { Button } from "./button"

interface GoogleSignInButtonProps {
children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps>= ({children}) => {

    const loginWithgoogle = () => {
        console.log("login with google")
    }

  return (
    <Button className="w-full mt-6 bg-black text-white" onClick={loginWithgoogle}>{children}</Button>
  )
}

export default GoogleSignInButton;