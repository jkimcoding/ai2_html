
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_API;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


export async function generateContent(request){

  try{
    const result = await model.generateContent(request);
    const response = await result.response;
    const text = await response.text();
    return text
  }
  catch(err){
    return("error");
  }
}
