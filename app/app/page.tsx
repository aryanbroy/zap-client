"use client";

import { useSession } from "next-auth/react";
import { MoonLoader } from "react-spinners";

export default function App() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <h1>Session present: {session.user?.name}</h1>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <MoonLoader color="black" size={34} />
        </div>
      )}
    </>
  );
}
