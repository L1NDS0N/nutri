"use client";
import { useRouter } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";

export default function Home() {
  const router = useRouter();
  
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
