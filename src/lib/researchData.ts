// lib/researchData.ts
export interface ResearchItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  content:string
}

export const researchItems: ResearchItem[] = [
  {
    slug: "dynamic-multi-model-orchestration",
    date: "12 June 2025",
    title: "Dynamic Multi-Model Orchestration for Scalable AI Infrastructure",
    description:
      "Modern applications need intelligent identity verification and tracking capabilities, but building these features from scratch is complex, time-consuming, and expensive.",
      content:"We’re releasing a more advanced speech-to-speech model and new API capabilities including MCP server support, image input, and SIP phone calling support.",
  },
  {
    slug: "privacy-preserving-federated-learning",
    date: "17 March 2025",
    title:
      "Privacy-Preserving Federated Learning for Enterprise AI Applications",
    description:
      "Enterprise adoption of AI is often constrained by data privacy regulations and competitive concerns about sharing sensitive information.",
      content:"Enterprise adoption of AI is often constrained by data privacy regulations and competitive concerns about sharing sensitive information.",
  },
  {
    slug: "multi-modal-scalable-infrastructure",
    date: "12 June 2025",
    title: "Dynamic Multi-Model Orchestration for Scalable AI Infrastructure",
    description:
      "Enterprise adoption of AI is often constrained by data privacy regulations and competitive concerns about sharing sensitive information.",
      content:"The deployment of AI applications at the network edge promises ultra-low latency and improved user experiences, but current approaches fail to address the environmental impact of distributed computing infrastructure."
  },
];
