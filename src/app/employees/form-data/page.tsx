"use client";
import DataForm from "@/components/Form/DataForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    },
  });
  return (
    <div className="flex flex-col w-full mx-12 mt-16 max-w-screen-xl justify-center">   
      
      <DataForm/>
    </div>
  );
};

export default Page;
