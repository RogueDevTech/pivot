

"use client";

import { useSidebarToggleStore } from "@/store/useSidebarToggleStore";
import Sidebar from "@/components/Sidebar";
import ToggleSidebarButton from "@/components/ToggleSidebarButton";
import Footer from "@/feature/homepage/component/Footer";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const visible = useSidebarToggleStore((s) => s.visible);

  return (
    <div className="relative flex max-w-[1440px] mx-auto">
      {/* Sidebar */}
      {visible && <Sidebar />}

      {/* Main content */}
      <main
        className={`mt-[90px] mb-[32px] min-h-screen overflow-y-auto no-scrollbar px-4 md:px-12 transition-all duration-300
          ${visible ? "ml-0 md:ml-[270px]" : "ml-0 w-full"}`}
      >
        <ToggleSidebarButton />
        {children}
        <div className="mt-[100px]">
          <Footer />
        </div>
      </main>
    </div>
  );
}
