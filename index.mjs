import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_SECRET_KEY);

async function generateContentStream() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContentStream({
    contents: [{ role: "user", parts: [{ text: "What is React?" }] }],
  });

  for await (const chunk of result.stream) {
   
   console.dir(chunk,{depth:null}); // ✅ Streaming word by word
  }
}

generateContentStream();
