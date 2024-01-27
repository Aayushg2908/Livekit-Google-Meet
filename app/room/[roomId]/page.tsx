"use client";

import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import "@livekit/components-styles";

const RoomPage = ({ params }: { params: { roomId: string } }) => {
  const router = useRouter();
  const { roomId } = params;
  const [token, setToken] = useState("");
  const { user } = useUser();

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `/api/livekit?room=${roomId}&username=${user?.username}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <LiveKitRoom
      video={false}
      audio={false}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      data-lk-theme="default"
      style={{ height: "100dvh" }}
      onDisconnected={() => {
        router.push("/gmeet");
      }}
    >
      <VideoConference />
    </LiveKitRoom>
  );
};

export default RoomPage;
