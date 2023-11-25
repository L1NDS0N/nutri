"use client";
import { useRouter } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";

export default function Home() {
  const router = useRouter();

  // This component will never be rendered on the server side,
  // but if for some reason it does, the redirect will be handled.
  if (typeof window !== "undefined") {
    router.push("/dashboard");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <ImSpinner2 className="animate-spin" />
      </div>
    </div>
  );
}
