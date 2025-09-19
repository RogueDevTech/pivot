

"use client";
import { ToggleIcon } from "@/components/icons/SvgIcon";
import { useSidebarToggleStore } from "@/store/useSidebarToggleStore";
import clsx from "clsx";

const ToggleSidebarButton = () => {
  const toggle = useSidebarToggleStore((s) => s.toggle);
  const visible = useSidebarToggleStore((s) => s.visible);

  return (
    <button
      onClick={toggle}
      aria-label="Toggle Sidebar"
      className={clsx(
        "hidden md:flex absolute z-50 transition-all duration-200 outline-none",
        "top-[100px]",
        visible ? "left-[270px]" : "left-4"
      )}
    >
      <ToggleIcon />
    </button>
  );
};

export default ToggleSidebarButton;
