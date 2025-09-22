"use client";

import React from "react";

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <h2 className="text-[#ffffff] text-[18px] leading-[24px] font-medium tracking-[0%]">
        {title}
      </h2>
      <div className="flex flex-col gap-[8px]">{children}</div>
      <div className="border-t border-[#EAEAEA] mt-[12px]"></div>
    </div>
  );
};

export default function TermsOfServicePage() {
  return (
    <main className="w-full h-full">
      <section className="flex flex-col gap-[24px] w-full py-[32px]">
        <div className="flex flex-col gap-[12px]">
          <h1 className="text-[#ffffff] text-[28px] leading-[36px] font-medium tracking-[0%]">
            Terms of Service
          </h1>
          <p className="text-[#9EA3A2] text-[14px] leading-[20px] tracking-[0%] max-w-[800px]">
            Welcome to Pivot. These Terms of Service (&apos;Terms&apos;) govern your
            access to and use of our website, products, and services
            (collectively, the &apos;Services&apos;). By accessing or using the Services,
            you agree to be bound by these Terms.
          </p>
        </div>

        <Section title="1. Eligibility">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            You must be at least 18 years old or the age of majority in your
            jurisdiction to use the Services. By using the Services, you
            represent and warrant that you meet these requirements and that the
            information you provide to us is accurate and complete.
          </p>
        </Section>

        <Section title="2. Account Registration">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            To access certain features, you may need to create an account. You
            are responsible for maintaining the confidentiality of your login
            credentials and for all activities that occur under your account.
            You agree to notify us immediately of any unauthorized use of your
            account or any other breach of security.
          </p>
        </Section>

        <Section title="3. Acceptable Use">
          <ul className="list-disc pl-[18px] text-[#9EA3A2] text-[14px] leading-[22px]">
            <li>Do not use the Services for any unlawful purpose.</li>
            <li>
              Do not interfere with or disrupt the integrity of the Services.
            </li>
            <li>
              Do not attempt to gain unauthorized access to any systems or
              networks.
            </li>
            <li>
              Do not reverse engineer, decompile, or disassemble any part of the
              Services except as permitted by law.
            </li>
          </ul>
        </Section>

        <Section title="4. Intellectual Property">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            The Services, including all content, software, features, and
            functionality, are owned by Pivot or its licensors and are protected
            by intellectual property laws. Except as expressly permitted, you
            may not copy, modify, distribute, sell, or lease any part of the
            Services.
          </p>
        </Section>

        <Section title="5. Third-Party Services">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            The Services may integrate with or link to third-party products or
            services. We are not responsible for third-party content, policies,
            or practices. Your use of third-party services is subject to their
            terms.
          </p>
        </Section>

        <Section title="6. Disclaimers">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            The Services are provided on an &apos;as is&apos; and &apos;as available&apos; basis. To
            the fullest extent permitted by law, Pivot disclaims all warranties,
            express or implied, including merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            To the maximum extent permitted by law, Pivot and its affiliates are
            not liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses, resulting from your use of the Services.
          </p>
        </Section>

        <Section title="8. Indemnification">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            You agree to defend, indemnify, and hold harmless Pivot, its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses arising from your
            use of the Services or violation of these Terms.
          </p>
        </Section>

        <Section title="9. Changes to the Services and Terms">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            We may modify or discontinue the Services at any time. We may also
            update these Terms from time to time. If we make material changes,
            we will provide notice by updating the date below or by other
            reasonable means. Your continued use of the Services constitutes
            acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            These Terms are governed by the laws of the jurisdiction in which
            Pivot is organized, without regard to conflict of law principles.
            Any disputes arising from these Terms or the Services will be
            resolved in the courts located in that jurisdiction.
          </p>
        </Section>

        <Section title="11. Contact">
          <p className="text-[#9EA3A2] text-[14px] leading-[20px]">
            Questions about these Terms? Contact us at
            <span className="text-[#ffffff]"> support@pivot.ai</span>.
          </p>
          <p className="text-[#9EA3A2] text-[12px] leading-[18px] mt-[4px]">
            Last updated: {new Date().toISOString().slice(0, 10)}
          </p>
        </Section>
      </section>
    </main>
  );
}
