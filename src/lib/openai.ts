import OpenAI from "openai";

console.log(
  
  process.env.NEXT_PUBLIC_OPENAI_API_KEY
);

export const openai =
  new OpenAI({
    apiKey:
      process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
