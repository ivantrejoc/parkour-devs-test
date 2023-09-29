import SignInForm from "@/components/Form/SignInForm";
import { Toaster } from "@/components/ui/toaster";


const Page = () => {
  return (

    <div className="w-full">
    <SignInForm/>
    <Toaster />
    
    </div>
  )
  }

  export default Page;