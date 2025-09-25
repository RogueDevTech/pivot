"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BookCallPage() {
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
            Book a Call
          </h1>
          <p className="text-[#9EA3A2] text-[14px] leading-[25px] tracking-[0%] max-w-[800px]">
            Speak with our team to explore how Pivot can streamline your AI
            infrastructure and accelerate your roadmap. We’ll assess your needs,
            share best practices, and define the fastest path to value for your
            use case.
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
              Tailored Guidance
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Get recommendations aligned with your architecture, SLAs, and
              security requirements.
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
              Clear Next Steps
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Walk away with an actionable plan, timelines, and integration
              options—no fluff.
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
              Fast-Track Outcomes
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Learn how to ship faster using our developer-first APIs and
              production-ready components.
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
            How it works
          </h2>
          <ol className="list-decimal list-inside text-[#9EA3A2] text-[14px] leading-[25px] space-y-1">
            <li>Share your goals and current stack.</li>
            <li>We map the best-fit solution and integration path.</li>
            <li>Get timelines, pricing, and a recommended rollout plan.</li>
          </ol>
        </motion.div>

        <motion.div
          className="flex items-center gap-[12px] mt-[8px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link href="#schedule" className="no-underline">
            <button className="cursor-pointer px-[12px] h-[40px] bg-[#EDEDED] text-[#0A0A0A] text-[14px] leading-[20px] transition-colors hover:bg-[#D4D4D4]">
              Schedule a Call
            </button>
          </Link>
          <Link href="/products" className="no-underline">
            <button className="cursor-pointer px-[12px] h-[40px] bg-transparent text-[#9EA3A2] text-[14px] leading-[20px] transition-colors hover:bg-[#9EA3A2] hover:text-black">
              Explore Products
            </button>
          </Link>
        </motion.div>

        <motion.div
          id="schedule"
          className="mt-[24px] flex flex-col gap-[12px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-[#ffffff] text-[20px] leading-[36px] font-medium">
            Pick a time
          </h2>
          <p className="text-[#9EA3A2] text-[14px] leading-[25px] max-w-[800px]">
            Choose a 30-minute slot that works for you. We’ll send a calendar
            invite with a secure video link. Prefer email instead? Reach us at
            <span className="text-[#ffffff]"> team@pivot.ai</span>.
          </p>
          <motion.div
            className="border-1 border-[#ffffff] p-4 text-[#9EA3A2] text-[14px] leading-[25px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            Calendar embed placeholder. Integrate your scheduling tool (e.g.
            Calendly, Cal.com) here.
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-[24px] flex flex-col gap-[12px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-[#ffffff] text-[20px] leading-[36px] font-medium">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-[12px] max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                Who is this call for?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Product leaders, engineering managers, and founders who want a
                clear AI integration plan without heavy infrastructure overhead.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.06 }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                What should I prepare?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                A quick overview of your use case, target experience, and any
                constraints (security, compliance, timelines).
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.12 }}
            >
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                How fast can we get started?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Most teams ship a first milestone in days using our
                developer-first APIs and reference implementations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
