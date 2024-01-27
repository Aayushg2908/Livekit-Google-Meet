import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-4 p-10">
      <div className="flex flex-col items-start gap-y-4 ml-10 md:w-1/2">
        <h1 className="font-bold text-5xl">
          G<span className="text-primary">Meet</span>
        </h1>
        <h1 className="text-5xl lg:text-7xl">
          Video calls with anyone, anywhere
        </h1>
        <p className="text-muted-foreground text-lg">
          Stay connected and collaborate with friends, family and colleagues no
          matter where you are.
        </p>
        <SignedOut>
          <SignInButton>
            <Button size="lg" className="text-black mt-2 max-md:w-full">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link
            href="/gmeet"
            className={cn(
              buttonVariants({
                className: "text-black mt-2 max-md:w-full",
                size: "lg",
              })
            )}
          >
            Enter GMeet <ArrowRightIcon className="w-5 h-5 ml-1.5" />
          </Link>
        </SignedIn>
      </div>
      <Image
        src="/landing.png"
        alt="landingImage"
        width={600}
        height={600}
        className="bg-background w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[500px]"
      />
    </div>
  );
};
