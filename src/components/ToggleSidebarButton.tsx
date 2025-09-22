"use client";
import React from "react";
import { ToggleIcon } from "@/components/icons/SvgIcon";
import { useSidebarToggleStore } from "@/store/useSidebarToggleStore";
import clsx from "clsx";

const ToggleSidebarButton = () => {
  const toggle = useSidebarToggleStore((s) => s.toggle);
  const visible = useSidebarToggleStore((s) => s.visible);
  const [left, setLeft] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const getContainerLeft = () => {
      const vw = window.innerWidth;
      const containerWidth = Math.min(vw * 0.8, 1440);
      const containerLeft = (vw - containerWidth) / 2 + 16;
      return containerLeft;
    };

    const compute = () => {
      const anchor = document.getElementById("sidebar-anchor");
      let px: number;
      if (visible && anchor) {
        const rect = anchor.getBoundingClientRect();
        px = Math.round(rect.right + 8);
      } else {
        px = Math.round(getContainerLeft());
      }
      setLeft(`${px}px`);
    };
    compute();
    window.addEventListener("resize", compute);
    window.addEventListener("scroll", compute, { passive: true });
    return () => {
      window.removeEventListener("resize", compute);
      window.removeEventListener("scroll", compute);
    };
  }, [visible]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={visible}
      aria-label={visible ? "Collapse sidebar" : "Expand sidebar"}
      className={clsx(
        "hidden lg:block fixed z-40 top-[60px] transition-[left] duration-200 ease-out",
        "min-w-[40px] w-[40px] h-[40px] outline-none",
        "transition-colors duration-200 bg-transparent hover:bg-[#1A1A1A]/60 cursor-pointer"
      )}
      style={left ? { left } : undefined}
      data-react-aria-pressable
    >
      <span className="flex items-center justify-center w-full h-full">
        <ToggleIcon />
      </span>
    </button>
  );
};

export default ToggleSidebarButton;
