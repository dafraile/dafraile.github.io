import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
// Note: In a real production environment, you might want to proxy this through a backend 
// to hide the API key, or use a restricted key that only works on your domain.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};