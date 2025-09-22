// import React from "react";
// import img1 from "@/components/images/research/research-one.png";
// import img2 from "@/components/images/research/research-two.png";
// import Image from "next/image";
// import SolutionText from "@/components/SolutionText";
// import Button from "@/components/Button";

// const Boundaries = () => {
//   return (
//     <section className="flex flex-col gap-[32px]">
//       <div className="flex flex-col gap-[16px]">
//         <SolutionText className="text-[28px]">
//           Pushing the Boundaries of AI Infrastructure
//         </SolutionText>
//         <p className="text-[#9EA3A2] leading-[100%] tracking-[0%] font-regular text-400 w-full lg:w-[729px]">
//           At Pivot Labs, research is more than an academic pursuit—it is the
//           driving force behind the next generation of intelligent applications.
//           Our initiatives range from foundational AI architectures to practical
//           deployment optimizations, ensuring our platform stays at the forefront
//           of technological innovation.
//         </p>
//         <Button>Contact Us</Button>
//       </div>
//       <div className="flex flex-col lg:flex-row justify-between lg:w-[729px] w-full">
//         <div className="flex flex-col justify-between gap-[16px] w-full lg:w-[360px]">
//           <div className="relative lg:w-[357px] h-[239px] w-full">
//             <Image
//               src={img1}
//               fill
//               alt="img"
//               className="object-fit w-full h-full"
//             />
//           </div>
//           <div className="flex flex-col gap-[16px]">
//             <p className="text-[#9EA3A2] text-[12px] leading-[180%] tracking-[0%] text-400 font-regular">
//               12 June 2025
//             </p>
//             <h5 className="leading-[100%] tracking-[0%] text-[16px] font-medium text-[#ffffff]">
//               Dynamic Multi-Model Orchestration for Scalable AI Infrastructure
//             </h5>
//             <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] font-regular text-400 text-[14px]">
//               Modern applications need intelligent identity verification and
//               tracking capabilities, but building these features from scratch is
//               complex, time-consuming, and expensive.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between gap-[16px] w-full lg:w-[360px]">
//           <div className="relative lg:w-[357px] h-[239px] w-full">
//             <Image
//               src={img2}
//               fill
//               alt="img"
//               className="object-fit w-full h-full"
//             />
//           </div>
//           <div className="flex flex-col gap-[16px]">
//             <p className="text-[#9EA3A2] text-[12px] leading-[180%] tracking-[0%] text-400 font-regular">
//               17 March 2025
//             </p>
//             <h5 className="leading-[100%] tracking-[0%] text-[16px] font-medium text-[#ffffff]">
//               Privacy-Preserving Federated Learning for Enterprise AI
//               Applications
//             </h5>
//             <p className="text-[#9EA3A2] leading-[180%] tracking-[0%] font-regular text-400 text-[14px]">
//               Enterprise adoption of AI is often constrained by data privacy
//               regulations and competitive concerns about sharing sensitive
//               information.{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Boundaries;
// feature/research/components/Boundaries.tsx
"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import Button from "@/components/Button";
import { researchItems } from "@/lib/researchData";
import Link from "next/link";
import img1 from "@/components/images/research/research-one.png";
import img2 from "@/components/images/research/research-two.png";
import img3 from "@/components/images/research/research-three.png";

const Boundaries: React.FC = () => {
  // Map research items to their images
  const researchWithImages = [
    { ...researchItems[0], image: img1 },
    { ...researchItems[1], image: img2 },
    { ...researchItems[2], image: img3 },
  ] as Array<(typeof researchItems)[number] & { image: StaticImageData }>;

  return (
    <section className=" flex flex-col gap-[48px] w-full">
      <div className="">
        <h2 className="w-full mt-3 font-medium leading-[36px] text-[28px] tracking-[0%] text-[#ffffff]">
          Pushing the Boundaries of AI Infrastructure
        </h2>
        <p className="text-[#9EA3A2] leading-[20px] mt-1 mb-5 tracking-[0%] font-regular text-[14px] w-full max-w-[729px]">
          At Pivot Labs, research is more than an academic pursuit—it is the
          driving force behind the next generation of intelligent applications.
          Our initiatives range from foundational AI architectures to practical
          deployment optimizations, ensuring our platform stays at the forefront
          of technological innovation.
        </p>
        <Button>Contact Us</Button>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[16px] w-full">
        {researchWithImages.map((item) => (
          <Link
            key={item.slug}
            href={`/research/${item.slug}`}
            className="flex flex-col gap-[8px] w-full group cursor-pointer"
          >
            <div className="relative w-full h-[239px] overflow-hidden">
              <Image
                src={item.image}
                fill
                alt={item.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="">
              <p className="text-[#9EA3A2] text-[12px] mb-1 leading-[180%] tracking-[0%] font-regular">
                {item.date}
              </p>
              <h5 className="leading-[25px] mb-2 tracking-[0%] text-[16px] max-w-[250px] font-medium text-[#ffffff] group-hover:text-blue-400 transition-colors">
                {item.title}
              </h5>
              <p className="text-[#9EA3A2] leading-[25px] tracking-[0%] font-regular text-[14px]">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Boundaries;
