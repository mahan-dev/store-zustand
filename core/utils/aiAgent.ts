import OpenAi from "openai";

export const aiHandler = async (searchParams: string) => {
  if (!searchParams.length) return;
  
  console.log(searchParams);

  
  try {
    const client = new OpenAi({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPEN_ROUTER_API_KEY,
    });
    const text = await client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: "what is love ?" }],
      max_completion_tokens: 200,
    });

    const answer = text.choices[0].message.content;
    console.log(answer, "answer here");
    console.log(text);

    return text;
  } catch (error) {
    console.error("AI Error:", error);
    return "AI request failed";
  }
};
