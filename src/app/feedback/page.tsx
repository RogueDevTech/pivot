"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeedbackPage() {
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
            Feedback
          </h1>
          <p className="text-[#9EA3A2] text-[14px] leading-[25px] tracking-[0%] max-w-[800px]">
            Help us improve Pivot. Share what’s working, what isn’t, and what
            you’d like to see next. We read every submission and use your input
            to shape our roadmap.
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
              Feature Requests
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Tell us which capabilities would unlock the most value for your
              team.
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
              Bug Reports
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Found an issue? Include steps to reproduce and any relevant
              context.
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
              Developer Experience
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Share feedback on docs, APIs, examples, and onboarding flow.
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
            Submit Feedback
          </h2>
          <p className="text-[#9EA3A2] text-[14px] leading-[25px] max-w-[800px]">
            Use the form below or email us at
            <span className="text-[#ffffff]"> feedback@pivot.ai</span>.
          </p>
          <motion.div
            className="border-1 border-[#ffffff] p-4 text-[#9EA3A2] text-[14px] leading-[25px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            Feedback form placeholder. Connect your preferred form provider or
            backend endpoint here.
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center gap-[12px] mt-[8px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link href="/help" className="no-underline">
            <button className="cursor-pointer px-[12px] h-[40px] bg-transparent text-[#9EA3A2] text-[14px] leading-[20px] transition-colors hover:bg-[#9EA3A2] hover:text-black">
              Visit Help Center
            </button>
          </Link>
          <Link href="/book-call" className="no-underline">
            <button className="cursor-pointer px-[12px] h-[40px] bg-[#EDEDED] text-[#0A0A0A] text-[14px] leading-[20px] transition-colors hover:bg-[#D4D4D4]">
              Talk to Us
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
          <div className="flex flex-col gap-[12px] max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                How soon do you respond?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Most feedback receives a response within 2–5 business days.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.06 }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                Do you share your roadmap?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                We publish periodic updates and changelogs reflecting
                prioritized items.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.12 }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                Can I join a beta?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Yes—opt in during submission or email
                <span className="text-[#ffffff]"> feedback@pivot.ai</span> to
                request access.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
