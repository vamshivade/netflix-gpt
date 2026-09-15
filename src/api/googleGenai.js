import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

export const getGoogleAIClient = () => {
  if (!apiKey) {
    return null;
  }

  return new GoogleGenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });
};

export const googleAI = () => getGoogleAIClient();
