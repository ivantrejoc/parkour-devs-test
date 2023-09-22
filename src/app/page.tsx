"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    },
  });

  return (
    <div>
      <div className="text-black-600">Hi, {session?.data?.user?.email}</div>
      
      <h1 className="text-4xl">Welcome to Employees Register</h1>      
    </div>
  );
}

Home.requireAuth = true;
