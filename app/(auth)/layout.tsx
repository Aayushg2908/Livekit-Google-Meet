import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-6">
      <Link href="/" className="font-bold text-5xl">
        G<span className="text-primary">Meet</span>
      </Link>
      {children}
    </div>
  );
};

export default AuthLayout;
