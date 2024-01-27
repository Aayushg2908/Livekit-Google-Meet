import Link from "next/link";
import { Button } from "./ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="w-full h-[70px] border-b flex justify-between items-center px-8">
      <Link href="/" className="font-bold text-3xl">
        G<span className="text-primary">Meet</span>
      </Link>
      <SignedOut>
        <SignInButton>
          <Button className="text-black">Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
};
