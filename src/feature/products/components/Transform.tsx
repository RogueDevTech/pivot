import Paragraph from "@/components/Paragraph";
import React from "react";
import Text from "@/components/Text";
const Transform = () => {
  const list = [
    {
      txt: "Context-Aware Artificial Intelligence",
      paragraph:
        "Smarter design guidance through AI-driven context, psychology, and optimization.",
    },
    {
      txt: "Predictive Intelligence with Advanced Machine Learning",
      paragraph:
        "Proactive AI modeling forecasts engagement, conversions, and accessibility challenges.",
    },
    {
      txt: "Learning that Scales on Collective Intelligence",
      paragraph:
        "Federated learning makes Avery AI stronger with every design decision.",
    },
  ];

  const item = [
    {
      header: "Individual Designers: AI as Creative Partner",
      list1:
        "Spend 60-70% less time on manual quality checks through automated AI analysis",
      list2:
        "Receive personalized guidance that accelerates professional growth",
      list3:
        "Make confident decisions backed by AI-processed data from millions of design patterns",
      list4: " Discover innovative approaches through AI-generated suggestions",
    },
    {
      header: "Design Teams: Scalable Intelligence Infrastructure",
      list1:
        "Maintain design quality across unlimited projects through AI-powered pattern recognition",
      list2:
        "Share design expertise instantly through AI-mediated knowledge transfer",
      list3:
        "Build upon collective successes through AI analysis of what works and why",
      list4:
        "Automated design review processes that catch issues before they impact users",
    },
    {
      header: "Organizations: Strategic Design Intelligence",
      list1:
        " Direct correlation between design decisions and business outcomes through advanced analytics",
      list2:
        "Data-driven insights about where design improvements will have greatest impact",
      list3:
        "AI analysis of design trends and market positioning opportunities",
      list4:
        "Systematic approach to building design excellence across growing organizations",
    },
  ];

  return (
    <section className="flex flex-col gap-[64px]">
      <div className="flex flex-col gap-[32px]">
        <div className=" flex flex-col gap-[5px] w-[729px]">
          <Paragraph className=" text-[20px] text-[#ffffff]">
            Transforming Design from Creation to Intelligence
          </Paragraph>
          <Text className="leading-[180%] text-[14px]">
            In the rapidly evolving world of digital design, teams face an
            increasingly complex challenge: creating exceptional user
            experiences while maintaining consistency, accessibility, and
            business impact at scale. Enter Avery AI—Pivotlabs groundbreaking
            artificial general intelligence platform specifically engineered for
            design intelligence that fundamentally transforms how teams approach
            digital product creation. Avery AI represents the convergence of
            advanced artificial intelligence with deep design expertise,
            creating the worlds first AGI system purpose-built to understand,
            analyze, and optimize the entire design process from conception to
            user impact.
          </Text>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h3 className="leading-[31px] tracking-[0%] text-[#ffffff] text-[20px] font-medium w-[432px]">
            Federated learning makes Avery AI stronger with every design
            decision.
          </h3>
          <div className="md:grid-cols-2 grid sm:grid-cols-1  lg:grid-cols-3 justify-between w-full lg:w-[729px]">
            {list.map((feat, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-[16px] w-[216px]"
              >
                <Paragraph className="text-[#ffffff] text-[16px]">
                  {feat.txt}
                </Paragraph>
                <Text className="text-[14px] leading-[180%]">
                  {feat.paragraph}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <p className="w-[296px] text-[#ffffff] leading-[31px] tracking-[0%] text-[20px]">
          Built for Modern Design Teams: AI-Powered Collaboration
        </p>
        <div className="flex flex-col gap-[32px] w-full lg:w-[729px]">
          {item.map((feat, index) => (
            <div key={index} className="flex flex-col gap-[16px]">
              <Paragraph className="text-[#ffffff text-[16px]">
                {feat.header}
              </Paragraph>
              <ul className="flex flex-col gap-[16px]">
                <li>
                  <Text className="leading-[180%] text-[14px]">
                    {feat.list1}
                  </Text>
                </li>
                <li>
                  <Text className="leading-[180%] text-[14px]">
                    {feat.list2}
                  </Text>
                </li>
                <li>
                  <Text className="leading-[180%] text-[14px]">
                    {feat.list3}
                  </Text>
                </li>
                <li>
                  <Text className="leading-[180%] text-[14px]">
                    {feat.list4}
                  </Text>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transform;
