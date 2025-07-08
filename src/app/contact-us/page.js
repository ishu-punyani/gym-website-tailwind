'use client';

import Body from "./layout/Body";
import useIsMobile from "../hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <Body isMobile={isMobile} />
  );
}
