/* AIzaSyD7Zpn4V2WK1_OU0s8NCgJnrolyEbVt5P4 */
// const api_key= "AIzaSyD7Zpn4V2WK1_OU0s8NCgJnrolyEbVt5P4"
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
import { configDotenv } from "dotenv";
  
  const apiKey = "AIzaSyD7Zpn4V2WK1_OU0s8NCgJnrolyEbVt5P4"
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;