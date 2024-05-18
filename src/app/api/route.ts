import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");
  const languages = searchParams.get("languages");

  const task = `
    You will be provided with a sentence in an arbitrary language,
    and your task is to translate it into the languages the user indicates.
    Format the response as a JSON list with each translation as an object
    in the array, and with properties name, country, and text,
    which correspond to the language name, language country flag, and translation text.
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: [{ type: "text", text: task }],
      },
      {
        role: "user",
        content: [
          { type: "text", text: `Languages: ${languages}. Text: ${text}` },
        ],
      },
    ],
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    response_format: {
      type: "json_object",
    },
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return Response.json({ result: response.choices[0].message.content });
}
