"use client";

import { useEffect, useState } from "react";
import { RoomActionModal } from "../RoomActionModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <RoomActionModal />
    </>
  );
};

export default ModalProvider;
