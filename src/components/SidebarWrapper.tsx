"use client";

import { useSidebarToggleStore } from "@/store/useSidebarToggleStore";
import Sidebar from "@/components/Sidebar";
import Footer from "@/feature/homepage/component/Footer";
import ToggleSidebarButton from "./ToggleSidebarButton";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const visible = useSidebarToggleStore((s) => s.visible);

  return (
    <div className=" relative flex w-full">
      <ToggleSidebarButton />
      {/* Sidebar */}
      {visible && (
        <div id="sidebar-anchor" className=" relative">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <main
        className={`px-2 w-full mt-[90px] mb-[32px] min-h-screen overflow-y-auto no-scrollbar px-4 md:pr-0 md:pl-12 transition-all duration-300
          ${visible ? "w-[70%]" : "w-full"}`}
      >
        {children}
        <div className="mt-[50px]">
          <Footer />
        </div>
      </main>
    </div>
  );
}
