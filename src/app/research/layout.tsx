// app/research/layout.tsx
import React from "react";

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4">{children}</div>
    </main>
  );
}
