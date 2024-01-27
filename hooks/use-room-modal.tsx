import { create } from "zustand";

interface RoomModalState {
  room: string;
  identity: string;
  isOpen: boolean;
  onOpen: (room: string, identity: string) => void;
  onClose: () => void;
}

export const useRoomModal = create<RoomModalState>((set) => ({
  room: "",
  identity: "",
  isOpen: false,
  onOpen: (room, identity) => {
    set({ room, identity, isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false, room: "", identity: "" });
  },
}));
