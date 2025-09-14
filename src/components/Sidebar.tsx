// "use client";
// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import SearchInput from "./SearchInput";
// import { useSidebarStore } from "@/store/useSidebarStore";

// const Sidebar = () => {
//   const pathname = usePathname();
//   const [activeItem, setActiveItem] = useState("Home");
//   const { open, close } = useSidebarStore();

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   const navItems = {
//     main: [
//       { name: "Home", path: "/" },
//       { name: "Products", path: "/products" },
//       { name: "Solutions", path: "/solutions" },
//       { name: "Research", path: "/research" },
//     ],
//     company: [
//       { name: "Company", path: "/company" },
//       { name: "Partners", path: "/partners" },
//       { name: "Careers", path: "/careers" },
//       { name: "Community", path: "/community" },
//       { name: "Blog", path: "/blog" },
//     ],
//     support: [
//       { name: "Book Call", path: "/book-call" },
//       { name: "Help", path: "/help" },
//       { name: "Feedback", path: "/feedback" },
//     ],
//   };

//   return (
//     <>
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/50 z-30 md:hidden"
//           onClick={close}
//         />
//       )}
//       <aside className="fixed top-[60px] left-0 h-[calc(100vh-60px)] w-[300px] bg-black text-white flex flex-col shadow-lg border-y-0 border-x border-solid border-[#292929] overflow-y-auto no-scrollbar">
//         <nav className="flex flex-col">
//           <div className="px-[24px] py-[25px] border-b border-[#292929] sticky top-0 bg-black z-10">
//             <SearchInput value="" onChange={() => {}} />
//           </div>

//           <ul className="w-full border-b border-[#292929] px-[24px] py-[25px] space-y-4">
//             {navItems.main.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.path}
//                   className={`flex items-center justify-between py-1 cursor-pointer ${
//                     pathname === item.path ? "text-blue-500" : "text-white"
//                   }`}
//                   onClick={() => setActiveItem(item.name)}
//                 >
//                   <span>{item.name}</span>
//                   {pathname === item.path && (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <ul className="w-full border-b border-[#292929] px-[24px] py-[25px] space-y-4">
//             {navItems.company.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.path}
//                   className={`flex items-center justify-between py-1 cursor-pointer ${
//                     pathname === item.path ? "text-blue-500" : "text-white"
//                   }`}
//                   onClick={() => setActiveItem(item.name)}
//                 >
//                   <span>{item.name}</span>
//                   {pathname === item.path && (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <ul className="w-full border-b border-[#292929] px-[24px] py-[25px] space-y-4">
//             {navItems.support.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.path}
//                   className={`flex items-center justify-between py-1 cursor-pointer ${
//                     pathname === item.path ? "text-blue-500" : "text-white"
//                   }`}
//                   onClick={() => setActiveItem(item.name)}
//                 >
//                   <span>{item.name}</span>
//                   {pathname === item.path && (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { useSidebarStore } from "@/store/useSidebarStore";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("Home");
  const { open, close } = useSidebarStore();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // sync activeItem with current pathname when page changes
  useEffect(() => {
    const allItems = [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Solutions", path: "/solutions" },
      { name: "Research", path: "/research" },
      { name: "Company", path: "/company" },
      { name: "Partners", path: "/partners" },
      { name: "Careers", path: "/careers" },
      { name: "Community", path: "/community" },
      { name: "Blog", path: "/blog" },
      { name: "Book Call", path: "/book-call" },
      { name: "Help", path: "/help" },
      { name: "Feedback", path: "/feedback" },
    ];
    const current = allItems.find((item) => item.path === pathname);
    if (current) setActiveItem(current.name);
  }, [pathname]);

  const navItems = {
    main: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Solutions", path: "/solutions" },
      { name: "Research", path: "/research" },
    ],
    company: [
      { name: "Company", path: "/company" },
      { name: "Partners", path: "/partners" },
      { name: "Careers", path: "/careers" },
      { name: "Community", path: "/community" },
      { name: "Blog", path: "/blog" },
    ],
    support: [
      { name: "Book Call", path: "/book-call" },
      { name: "Help", path: "/help" },
      { name: "Feedback", path: "/feedback" },
    ],
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed 2xl:ml-[300px] top-[60px] left-0 h-[calc(100vh-60px)] w-[300px] z-40
        bg-black text-white flex flex-col shadow-lg border-x border-[#292929] overflow-y-auto no-scrollbar
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <nav className="flex flex-col">
          {/* Search - always visible */}
          <div className="px-[24px] py-[20px] border-b border-[#292929] bg-black">
            <SearchInput value="" onChange={() => {}} />
          </div>

          {/* Main Links */}
          <ul className="w-full border-b border-[#292929] px-[24px] py-[20px] space-y-4">
            {navItems.main.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center justify-between py-1 cursor-pointer ${
                    activeItem === item.name ? "text-blue-500" : "text-white"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <span>{item.name}</span>
                  {activeItem === item.name && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Company Links */}
          <ul className="w-full border-b border-[#292929] px-[24px] py-[20px] space-y-4">
            {navItems.company.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center justify-between py-1 cursor-pointer ${
                    activeItem === item.name ? "text-blue-500" : "text-white"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <span>{item.name}</span>
                  {activeItem === item.name && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Support Links */}
          <ul className="w-full border-b border-[#292929] px-[24px] py-[20px] space-y-4">
            {navItems.support.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center justify-between py-1 cursor-pointer ${
                    activeItem === item.name ? "text-blue-500" : "text-white"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <span>{item.name}</span>
                  {activeItem === item.name && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
