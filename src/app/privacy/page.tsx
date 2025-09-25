"use client";

import React from "react";
import { motion } from "framer-motion";

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <motion.div
      className="flex flex-col gap-[8px]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-[#ffffff] text-[18px] leading-[24px] font-medium tracking-[0%]">
        {title}
      </h2>
      <div className="flex flex-col gap-[8px]">{children}</div>
      <div className="border-t border-[#EAEAEA] mt-[12px]"></div>
    </motion.div>
  );
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] max-w-[800px]">
            Your privacy matters to us. This Privacy Policy explains how Pivot
            collects, uses, and protects your information when you use our
            Services.
          </p>
        </motion.div>

        <Section title="1. Information We Collect">
          <ul className="list-disc pl-[18px] text-[#9EA3A2] text-[14px] leading-[22px]">
            <li>
              Account Data: Name, email, password, and organization details when
              you create an account.
            </li>
            <li>
              Usage Data: Logs, device information, IP address, and interaction
              data for performance, analytics, and security.
            </li>
            <li>
              Biometric Data (if applicable): When you enable identity features,
              biometric templates may be processed for verification. We do not
              store raw biometric images.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Information">
          <ul className="list-disc pl-[18px] text-[#9EA3A2] text-[14px] leading-[22px]">
            <li>Provide, maintain, and improve the Services.</li>
            <li>Authenticate users and secure accounts.</li>
            <li>Monitor performance, prevent fraud, and ensure reliability.</li>
            <li>Communicate updates, security alerts, and support messages.</li>
          </ul>
        </Section>

        <Section title="3. Data Processing and Retention">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            We process data in secure environments with strict access controls.
            Biometric templates, when used, are encrypted and retained only as
            long as necessary for the purpose collected or as required by law.
          </p>
        </Section>

        <Section title="4. Sharing of Information">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            We do not sell personal data. We may share information with trusted
            service providers who assist in delivering the Services (e.g., cloud
            hosting, analytics) under strict confidentiality agreements, or when
            required by law.
          </p>
        </Section>

        <Section title="5. International Transfers">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            Your information may be processed in regions other than where you
            reside. We implement safeguards, such as standard contractual
            clauses, to protect your data during international transfers.
          </p>
        </Section>

        <Section title="6. Security">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            We use administrative, technical, and physical safeguards to protect
            your information, including encryption in transit and at rest,
            access controls, and continuous monitoring.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <ul className="list-disc pl-[18px] text-[#9EA3A2] text-[14px] leading-[22px]">
            <li>Access, update, or delete your personal information.</li>
            <li>Object to or restrict certain processing activities.</li>
            <li>Export your data where applicable.</li>
            <li>Withdraw consent for optional features at any time.</li>
          </ul>
        </Section>

        <Section title="8. Children’s Privacy">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            Our Services are not directed to children under 13. We do not
            knowingly collect personal information from children. If you believe
            a child has provided us with personal data, please contact us.
          </p>
        </Section>

        <Section title="9. Changes to this Policy">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by updating the date below or through other
            appropriate channels. Your continued use of the Services indicates
            acceptance of the updated policy.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            For privacy-related questions or requests, contact us at
            <span className="text-[#ffffff]"> privacy@pivot.ai</span>.
          </p>
          <p className="text-[#9EA3A2] text-[12px] leading-[18px] mt-[4px]">
            Last updated: {new Date().toISOString().slice(0, 10)}
          </p>
        </Section>
      </section>
    </motion.main>
  );
}
