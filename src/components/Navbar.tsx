// "use client";
// import React from "react";
// import Image from "next/image";
// import Logo from "@/components/images/logo.png";
// import { useSidebarStore } from "@/store/useSidebarStore";

// const Navbar = () => {
//   const toggleSidebar = useSidebarStore((s) => s.toggle);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#292929]">
//       <div className="max-w-[1440px] mx-auto flex items-center h-[60px] px-4 md:px-8 justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image src={Logo} alt="logo" priority />
//         </div>

//         {/* Right-side items */}
//         <div className="flex items-center gap-[10px]">
//           <p className="font-geist text-white leading-[100%] font-normal">
//             Search
//           </p>
//           <button className="px-[6px] w-[88px] h-[32px] bg-[#EDEDED] text-[#0A0A0A] font-medium text-sm leading-5 tracking-normal">
//             Book Call
//           </button>

//           {/* Mobile toggle button */}
//           <button
//             onClick={toggleSidebar}
//             className="md:hidden text-white ml-3"
//             aria-label="Toggle Sidebar"
//           >
//             ☰
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/components/images/logo.png";
import { useSidebarStore } from "@/store/useSidebarStore";

const Navbar = () => {
  const toggleSidebar = useSidebarStore((s) => s.toggle);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#292929]">
      <div className="max-w-[1440px] mx-auto flex items-center h-[60px] px-4 md:px-8 justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" priority />
        </div>

        {/* Right-side items */}
        <div className="flex items-center gap-[10px]">
          <p className="font-geist text-white leading-[100%] font-normal">
            Search
          </p>
          <button className="px-[6px] w-[88px] h-[32px] bg-[#EDEDED] text-[#0A0A0A] font-medium text-sm leading-5 tracking-normal">
            Book Call
          </button>

          {/* Mobile toggle button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white ml-3"
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
