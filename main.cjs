// import { GoogleGenerativeAI } from "@google/generative-ai";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBaLbnqLyc07b6Kpb2pBsXKG2tup4iN_u4");

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "essay on AI"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  // console.log(response);
  console.log(text);
}

run();