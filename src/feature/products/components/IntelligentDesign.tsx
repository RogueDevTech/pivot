import React from "react";
import prod1 from "@/components/images/products/product-image-one.png";
import prod2 from "@/components/images/products/product-two.jpg";
import prod3 from "@/components/images/products/product-3.jpg";
import Image from "next/image";

const IntelligentDesign = () => {
  const text = [
    {
      header: "The Future of Design Decision-Making",
      txtone:
        "Traditional design processes rely on intuition and subjective feedback. Avery AI augments human creativity with AI-powered insights, proven patterns, and predictive analytics spanning millions of design decisions.",
      txttwo:
        " This doesn't replace the designer's creative process—it enhances it exponentially. By handling routine analysis and providing contextual intelligence, Avery AI frees designers to focus on solving complex problems and creating delightful user experiences.",
      txtthree: "",
      txtfour: "",
    },
    {
      header: "Join the Intelligence Revolution",
      txtone:
        "The future of design isn't just about better tools—it's about fundamentally smarter decisions powered by artificial intelligence that truly understands design, users, and business impact. Avery AI represents a paradigm shift from reactive design processes to proactive design intelligence.",
      txttwo:
        "By combining human creativity with artificial general intelligence, contextual understanding with predictive analytics, and individual insights with collective learning, Avery AI is building the foundation for the next generation of digital experiences.",
      txtthree:
        "The age of design intelligence has arrived. The question isn't whether AI will transform design—it's whether your team will be leading that transformation.",
      txtfour: `Avery AI is currently in development by PivotLabs, representing years of research into the intersection of artificial intelligence and design excellence. To learn more about early access opportunities or stay updated on our progress toward launching the world's first design-focused AGI system, contact our team.`,
    },
  ];
  return (
    <section className="flex flex-col gap-[32px]">
      <div className="flex flex-col lg:flex-row items-center gap-[16px] h-full">
        <div className="relative w-full h-full lg:w-[501px] lg:h-[296px]">
          <Image src={prod1} fill alt="prod" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative w-full h-full lg:w-[219px] lg:h-[144px]">
            <Image src={prod2} fill alt="prod" className="w-full h-full" />
          </div>
          <div className="relative w-full h-full lg:w-[219px] lg:h-[144px]">
            <Image src={prod3} fill alt="prod" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] justify-between h-auto">
        <div className="flex flex-col gap-[16px]">
          <h4>The Power of Artificial General Intelligence in Design</h4>
          <div className=" flex flex-col w-full lg:w-[729px]">
            <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
              {" "}
              Avery AI leverages cutting-edge AGI capabilities that go far
              beyond pattern matching or rule-based analysis. The system
              demonstrates genuine understanding of design principles, user
              psychology, and business strategy. It can:
            </p>
            <ul className="flex flex-col gap-[12px]">
              <li>
                <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
                  Reason About Design Intent: Understanding not just what
                  elements exist in a design, but why they were placed there and
                  how they contribute to the overall user journey
                </p>
              </li>
              <li>
                <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
                  Synthesize Complex Relationships: Connecting visual design
                  choices to business metrics, user satisfaction, and long-term
                  product success
                </p>
              </li>
              <li>
                <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
                  Adapt to Novel Contexts: Applying learned principles to
                  entirely new design challenges and industry verticals
                </p>
              </li>
              <li>
                <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
                  Learn from Minimal Data: Generating insights from limited
                  information, much like experienced designers do when
                  approaching new projects
                </p>
              </li>
            </ul>
            <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
              This level of AI sophistication enables Avery AI to provide
              strategic guidance rather than just tactical feedback, making it
              an invaluable partner in the design process rather than simply
              another tool.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] h-fit">
          {text.map((ftxt, index) => (
            <div
              key={index}
              className="flex flex-col gap-[16px] w-full lg:w-[729px]"
            >
              <p className="text-[#ffffff] leading-[36px] text-[20px] font-medium">
                {ftxt.header}
              </p>
              <div className="flex flex-col gap-[24px]">
                <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
                  {ftxt.txtone}
                </p>
                <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
                  {ftxt.txttwo}
                </p>
                <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
                  {ftxt.txtthree}
                </p>
                <p className="text-[#9EA3A2] text-[14px] leading-[180%] tracking-[0%] font-regular">
                  {ftxt.txtfour}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentDesign;
