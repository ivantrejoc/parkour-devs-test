"use client";

import { Navbar } from "@/components/Navbar";
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
      <Navbar />
      <h3 className="text-black-600">Hi, {session?.data?.user?.email}</h3>
      <h1 className="text-black-600 text-4xl">Welcome to Employees Register</h1>
    </div>
  );
}

Home.requireAuth = true;
