import Link from "next/link";

export default function BookCallPage() {
  return (
    <main className="w-full h-full">
      <section className="flex flex-col gap-[24px] w-full py-[32px]">
        <div className="flex flex-col gap-[12px]">
          <h1 className="text-[#ffffff] text-[28px] leading-[36px] font-medium tracking-[0%]">
            Book a Call
          </h1>
          <p className="text-[#9EA3A2] text-[14px] leading-[25px] tracking-[0%] max-w-[800px]">
            Speak with our team to explore how Pivot can streamline your AI
            infrastructure and accelerate your roadmap. We’ll assess your needs,
            share best practices, and define the fastest path to value for your
            use case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          <div className="border-1 border-[#ffffff] p-4 flex flex-col gap-[8px]">
            <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
              Tailored Guidance
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Get recommendations aligned with your architecture, SLAs, and
              security requirements.
            </p>
          </div>
          <div className="border-1 border-[#ffffff] p-4 flex flex-col gap-[8px]">
            <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
              Clear Next Steps
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Walk away with an actionable plan, timelines, and integration
              options—no fluff.
            </p>
          </div>
          <div className="border-1 border-[#ffffff] p-4 flex flex-col gap-[8px]">
            <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
              Fast-Track Outcomes
            </h3>
            <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
              Learn how to ship faster using our developer-first APIs and
              production-ready components.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] mt-[8px]">
          <h2 className="text-[#ffffff] text-[20px] leading-[36px] font-medium">
            How it works
          </h2>
          <ol className="list-decimal list-inside text-[#9EA3A2] text-[14px] leading-[25px] space-y-1">
            <li>Share your goals and current stack.</li>
            <li>We map the best-fit solution and integration path.</li>
            <li>Get timelines, pricing, and a recommended rollout plan.</li>
          </ol>
        </div>

        <div className="flex items-center gap-[12px] mt-[8px]">
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
        </div>

        <div id="schedule" className="mt-[24px] flex flex-col gap-[12px]">
          <h2 className="text-[#ffffff] text-[20px] leading-[36px] font-medium">
            Pick a time
          </h2>
          <p className="text-[#9EA3A2] text-[14px] leading-[25px] max-w-[800px]">
            Choose a 30-minute slot that works for you. We’ll send a calendar
            invite with a secure video link. Prefer email instead? Reach us at
            <span className="text-[#ffffff]"> team@pivot.ai</span>.
          </p>
          <div className="border-1 border-[#ffffff] p-4 text-[#9EA3A2] text-[14px] leading-[25px]">
            Calendar embed placeholder. Integrate your scheduling tool (e.g.
            Calendly, Cal.com) here.
          </div>
        </div>

        <div className="mt-[24px] flex flex-col gap-[12px]">
          <h2 className="text-[#ffffff] text-[20px] leading-[36px] font-medium">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-[12px] max-w-[800px]">
            <div>
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                Who is this call for?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Product leaders, engineering managers, and founders who want a
                clear AI integration plan without heavy infrastructure overhead.
              </p>
            </div>
            <div>
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                What should I prepare?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                A quick overview of your use case, target experience, and any
                constraints (security, compliance, timelines).
              </p>
            </div>
            <div>
              <h3 className="text-[#ffffff] text-[16px] leading-[20px] font-medium">
                How fast can we get started?
              </h3>
              <p className="text-[#9EA3A2] text-[14px] leading-[25px]">
                Most teams ship a first milestone in days using our
                developer-first APIs and reference implementations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
