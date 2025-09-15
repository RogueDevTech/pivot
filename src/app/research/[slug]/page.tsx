// // app/research/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import { researchItems } from "@/lib/researchData";
// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import img1 from "@/components/images/research/research-one.png";
// import img2 from "@/components/images/research/research-two.png";
// import img3 from "@/components/images/research/research-three.png";
// import {
//   DynamicMultiModelContent,
//   PrivacyPreservingContent,
//   DynamicInfrastructureContent,
// } from "@/feature/research/components/ResearchContent";
// import { Metadata } from "next";

// type ResearchContentMap = Record<
//   string,
//   { image: StaticImageData; content: React.ReactNode }
// >;

// const researchContent: ResearchContentMap = {
//   "dynamic-multi-model-orchestration": {
//     image: img1,
//     content: <DynamicMultiModelContent />,
//   },
//   "privacy-preserving-federated-learning": {
//     image: img2,
//     content: <PrivacyPreservingContent />,
//   },
//   "multi-modal-scalable-infrastructure": {
//     image: img3,
//     content: <DynamicInfrastructureContent />,
//   },
// };

// interface ResearchDetailProps {
//   params: { slug: string };
// }

// export default function ResearchDetail({ params }: ResearchDetailProps) {
//   const researchItem = researchItems.find((item) => item.slug === params.slug);

//   if (!researchItem || !researchContent[params.slug]) {
//     return notFound();
//   }

//   const { image, content } = researchContent[params.slug];

//   return (
//     <article className="container">
//       <Link
//         href="/research"
//         className="inline-flex items-center text-#A1A1A1-400 hover:text-#A1A1A1-300 mb-6"
//       >
//         <ArrowLeft size={16} className="mr-2" />
//         Research
//       </Link>
//       <div className="w-full lg:w-[729px]">
//         <div className="flex items-center flex-col justify-items gap-[24px] mb-[24px]">
//           <h3 className="text-[#ffffff] leading-[100%] text-[28px] lg:w-[593px] w-full text-center font-medium tracking-[0%]">
//             {researchItem.title}
//           </h3>
//           <p className="text-[#9EA3A2] leading-[100%] text-[14px] tracking-[0%] text-center font-regular text-500 lg:w-[486px] w-full">
//             {researchItem.content}
//           </p>
//         </div>
//         <div className="relative w-full h-[296px] mb-8">
//           <Image
//             src={image}
//             alt={researchItem.title}
//             fill
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>

//       <div className="">{content}</div>
//     </article>
//   );
// }

// export async function generateStaticParams() {
//   return researchItems.map((item) => ({
//     slug: item.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: ResearchDetailProps): Promise<Metadata> {
//   const researchItem = researchItems.find((item) => item.slug === params.slug);

//   if (!researchItem) {
//     return { title: "Research Not Found" };
//   }

//   return {
//     title: researchItem.title,
//     description: researchItem.description,
//   };
// }

// app/research/[slug]/page.tsx

// app/research/[slug]/page.tsx

// app/research/[slug]/page.tsx

import { notFound } from "next/navigation";
import { researchItems } from "@/lib/researchData";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import img1 from "@/components/images/research/research-one.png";
import img2 from "@/components/images/research/research-two.png";
import img3 from "@/components/images/research/research-three.png";
import {
  DynamicMultiModelContent,
  PrivacyPreservingContent,
  DynamicInfrastructureContent,
} from "@/feature/research/components/ResearchContent";
import type { Metadata } from "next";

// Map slug → image + content
type ResearchContentMap = Record<
  string,
  { image: StaticImageData; content: React.ReactNode }
>;

const researchContent: ResearchContentMap = {
  "dynamic-multi-model-orchestration": {
    image: img1,
    content: <DynamicMultiModelContent />,
  },
  "privacy-preserving-federated-learning": {
    image: img2,
    content: <PrivacyPreservingContent />,
  },
  "multi-modal-scalable-infrastructure": {
    image: img3,
    content: <DynamicInfrastructureContent />,
  },
};

// ✅ Correct typing for Next.js 15 dynamic route
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Page component
export default async function ResearchDetail({ params }: PageProps) {
  const { slug } = await params;

  const researchItem = researchItems.find((item) => item.slug === slug);

  if (!researchItem || !researchContent[slug]) {
    return notFound();
  }

  const { image, content } = researchContent[slug];

  return (
    <article className="container">
      <Link
        href="/research"
        className="inline-flex items-center text-[#A1A1A1] hover:text-[#888] mb-6"
      >
        <ArrowLeft size={16} className="mr-2" />
        Research
      </Link>

      <div className="w-full lg:w-[729px]">
        <div className="flex items-center flex-col gap-[24px] mb-[24px]">
          <h3 className="text-[#ffffff] text-[28px] text-center font-medium">
            {researchItem.title}
          </h3>
          <p className="text-[#9EA3A2] text-[14px] text-center">
            {researchItem.content}
          </p>
        </div>

        <div className="relative w-full h-[296px] mb-8">
          <Image
            src={image}
            alt={researchItem.title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div>{content}</div>
    </article>
  );
}

// ✅ Static params for SSG
export async function generateStaticParams() {
  return researchItems.map((item) => ({
    slug: item.slug,
  }));
}

// ✅ Metadata function (await params)
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const researchItem = researchItems.find((item) => item.slug === slug);

  if (!researchItem) {
    return { title: "Research Not Found" };
  }

  return {
    title: researchItem.title,
    description: researchItem.description,
  };
}
