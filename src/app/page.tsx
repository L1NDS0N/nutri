import XMainContent from "@/components/XMainContent";
import XSidebar from "@/components/XSidebar";
import XTopbar from "@/components/XTopbar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <XSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <XTopbar />
        <XMainContent />
      </div>
    </div>
  );
}
