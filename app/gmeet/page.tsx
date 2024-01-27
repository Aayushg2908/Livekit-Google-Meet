"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuid } from "uuid";

const MainPage = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const { user } = useUser();

  const handleClick = () => {
    if (value.length === 0) {
      return toast.error("Please enter a valid Room ID");
    } else {
      router.push(`/room/${value}`);
    }
  };

  const handleCreateRoom = () => {
    const id = uuid();
    const roomId = id.slice(0, 8);
    window.navigator.clipboard.writeText(roomId);
    toast((t) => (
      <span className="flex items-center">
        Your Room Id is {roomId}
        <button
          onClick={() => {
            window.navigator.clipboard.writeText(roomId);
            toast.dismiss(t.id);
            toast.success("Copied to clipboard");
          }}
        >
          <CopyIcon className="w-4 h-4 ml-2" />
        </button>
      </span>
    ));
    setTimeout(() => {
      router.push(`/room/${roomId}?owner=${user?.username}`);
    }, 5000);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-sm:px-2">
      <Link href="/" className="mb-8 text-5xl font-bold">
        G<span className="text-primary">Meet</span>
      </Link>
      <Card className="w-[350px] max-sm:w-full">
        <CardHeader>
          <CardTitle>JOIN ROOM</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter the room ID"
          />
          <Button onClick={handleClick} className="mt-4 w-full">
            Join Room
          </Button>
        </CardContent>
      </Card>
      <div className="my-4 text-2xl select-none">------OR------</div>
      <Button onClick={handleCreateRoom} className="w-[330px] max-sm:w-full">
        Create Room
      </Button>
    </div>
  );
};

export default MainPage;
