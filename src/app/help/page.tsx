"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HelpPage() {
  return (
    <motion.main
      className="w-full h-full"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <section className="flex flex-col gap-[24px] w-full py-[32px]">
        <motion.div
          className="flex flex-col gap-[12px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-[#ffffff] text-[28px] leading-[36px] font-medium tracking-[0%]">
            Help Center
          </h1>
          <p className="text-[#9EA3A2] text-[14px] leading-[25px] tracking-[0%] max-w-[800px]">
            Find quick answers, setup guides, and best practices for building
            with Pivot. If you still need assistance, contact support or leave
            product feedback.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          <motion.div
            className="border-1 border-[#ffffff] p-4 flex flex-col gap-[8px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
              Getting Started
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Create API keys, authenticate requests, and make your first call.
            </p>
          </motion.div>
          <motion.div
            className="border-1 border-[#ffffff] p-4 flex flex-col gap-[8px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.06 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
              UI & Layout
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Use Next.js and Tailwind utilities to build consistent, responsive
              layouts.
            </p>
          </motion.div>
          <motion.div
            className="border-1 border-[#ffffff] p-4 flex flex-col gap-[8px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.12 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
              Troubleshooting
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Resolve common issues like hydration mismatches and image
              behavior.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col gap-[12px] mt-[8px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-[#ffffff] text-[20px] leading-[36px] font-medium">
            Popular Topics
          </h2>
          <ul className="list-disc list-inside text-[#9EA3A2] text-[14px] leading-[25px] space-y-1 max-w-[800px]">
            <li>Managing environment variables and project configuration</li>
            <li>
              Optimizing images with Next.js Image and object-fit strategies
            </li>
            <li>Handling sticky sidebars and overlay navigation patterns</li>
            <li>Consistent typography: font sizes, spacing, and leading</li>
          </ul>
        </motion.div>

        <motion.div
          className="flex items-center gap-[12px] mt-[8px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link href="/book-call" className="no-underline">
            <button className="cursor-pointer px-[12px] h-[40px] bg-[#EDEDED] text-[#0A0A0A] text-[14px] leading-[20px] transition-colors hover:bg-[#D4D4D4]">
              Talk to Us
            </button>
          </Link>
          <Link href="/feedback" className="no-underline">
            <button className="cursor-pointer px-[12px] h-[40px] bg-transparent text-[#9EA3A2] text-[14px] leading-[20px] transition-colors hover:bg-[#9EA3A2] hover:text-black">
              Leave Feedback
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-[24px] flex flex-col gap-[12px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-[#ffffff] text-[20px] leading-[36px] font-medium">
            FAQ
          </h2>
          <div className="flex flex-col gap-[12px] max-w=[800px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                Is there a sandbox?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Yes—use your development keys to explore endpoints safely
                without impacting production.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.06 }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                Where can I find examples?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Browse our example components and implementation notes across
                Products and Solutions pages.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.12 }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                Do you have SLAs?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Enterprise plans include SLAs, support tiers, and security
                reviews upon request.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
