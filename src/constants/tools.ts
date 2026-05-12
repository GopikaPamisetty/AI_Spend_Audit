import { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    category: "AI Assistant",

    pricingType: "flat",

    enterpriseAvailable: true,

    plans: [
      {
        name: "Free",
        monthlyPrice: 0,
      },

      {
        name: "Plus",
        monthlyPrice: 20,
      },

      {
        name: "Business",
        monthlyPrice: 25,
      },

      {
        name: "Enterprise",
        monthlyPrice: null,
      },
    ],
  },

  {
    id: "cursor",
    name: "Cursor",
    vendor: "Anysphere",
    category: "Coding Assistant",

    pricingType: "per-user",

    enterpriseAvailable: true,

    plans: [
      {
        name: "Hobby",
        monthlyPrice: 0,
        
      },

      {
        name: "Pro",
        monthlyPrice: 20,
        
      },

      {
        name: "Teams",
        monthlyPrice: 40,
       
      },

      {
        name: "Enterprise",
        monthlyPrice: null,
        
      },
    ],
  },

  {
    id: "claude",
    name: "Claude",
    vendor: "Anthropic",
    category: "AI Assistant",

    pricingType: "flat",

    enterpriseAvailable: true,

    plans: [
      {
        name: "Free",
        monthlyPrice: 0,
      },

      {
        name: "Pro",
        monthlyPrice: 20,
      },

      {
        name: "Max",
        monthlyPrice: 100,
      },
    ],
  },

  {
    id: "copilot",
    name: "GitHub Copilot",
    vendor: "GitHub",
    category: "Coding Assistant",

    pricingType: "per-user",

    enterpriseAvailable: true,

    plans: [
      {
        name: "Free",
        monthlyPrice: 0,
      },

      {
        name: "Pro",
        monthlyPrice: 10,
      },

      {
        name: "Pro+",
        monthlyPrice: 39,
      },
    ],
  },

  {
    id: "gemini",
    name: "Gemini",
    vendor: "Google",
    category: "AI Assistant",

    pricingType: "flat",

    enterpriseAvailable: true,

    plans: [
      {
        name: "Free",
        monthlyPrice: 0,
      },

      {
        name: "AI Plus",
        monthlyPrice: 399,
      },

      {
        name: "AI Pro",
        monthlyPrice: 1950,
      },
    ],
  },
];
