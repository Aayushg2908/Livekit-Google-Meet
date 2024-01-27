"use client";

import { useRoomModal } from "@/hooks/use-room-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { removeParticipant } from "@/actions";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export const RoomActionModal = () => {
  const { room, identity, isOpen, onClose } = useRoomModal();
  const { user } = useUser();

  const handleClick = async () => {
    await removeParticipant(room, identity);
    if (user?.username === identity) {
      toast.error("You have been removed from the call");
    } else {
      toast.success(`${identity} has been removed from the call`);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Actions</DialogTitle>
          <DialogDescription>
            Mute Audio, Close Video or Remove the participant from the call
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex justify-center items-center">
          <Button onClick={handleClick}>Remove</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
