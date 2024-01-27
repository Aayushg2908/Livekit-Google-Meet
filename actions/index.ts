"use server";

import { RoomServiceClient } from "livekit-server-sdk";

const roomService = new RoomServiceClient(
  process.env.NEXT_PUBLIC_LIVEKIT_URL!,
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

export const removeParticipant = async (room: string, identity: string) => {
  await roomService.removeParticipant(room, identity);
};
