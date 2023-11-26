"use client";
import XLoading from "@/components/XLoading";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  if (typeof window !== "undefined") {
    router.push("/dashboard");
  }
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <XLoading/>
      </div>
    </div>
  );
}
