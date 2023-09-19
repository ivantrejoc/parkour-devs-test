import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";




export const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between text-black">
        <Link href="/">Logo</Link>
        <Link className="text-white bg-gray-800 hover:bg-gray-900 border-solid-2-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" href="/sign-in">Login</Link>
        </div>
    </div>
  );
};
