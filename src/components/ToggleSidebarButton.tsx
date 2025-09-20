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
        "hidden md:flex fixed z-50 transition-all duration-200 outline-none top-[100px]",
        visible ? "left-[270px]" : "left-4",
        {
          "2xl:left-[calc(50%-720px+270px)]": visible,
          "2xl:left-[calc(50%-720px+16px)]": !visible,
        }
      )}
    >
      <ToggleIcon />
    </button>
  );
};

export default ToggleSidebarButton;
