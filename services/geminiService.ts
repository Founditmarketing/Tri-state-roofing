import { GoogleGenAI } from "@google/genai";
import { COMPANY_NAME, SERVICES, PHONE_NUMBER, ADDRESS } from "../constants";

const getSystemInstruction = () => {
  const serviceList = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
  return `You are "RoofBot", a helpful, friendly, and knowledgeable AI assistant for ${COMPANY_NAME}. 
  
  Your goal is to assist potential customers by answering questions about our services and encouraging them to schedule a free inspection.
  
  Key Information about us:
  - Phone: ${PHONE_NUMBER}
  - Address: ${ADDRESS}
  - Service Area: The "Tri-State" area including Quincy (IL), Hannibal (MO), Keokuk (IA), and surrounding communities within a ~50-100 mile radius.
  - Services:
  ${serviceList}
  
  Guidelines:
  1. Be concise, professional, and reassuring.
  2. If a user asks for a quote, explain that you can't give an exact price online but they should fill out the contact form or call ${PHONE_NUMBER} for a free estimate.
  3. If asked about safety or licenses, assure them we are fully licensed, bonded, and insured.
  4. Highlight that we are family-owned and experts in Midwest weather conditions (storms, hail, snow).
  5. Do not make up prices.
  6. Use a friendly tone.
  
  Format your responses in clean Markdown if necessary.`;
};

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I cannot connect to the server right now (Missing API Key). Please call us directly.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We use generateContent with the full history as context or just single turn for simplicity in this demo wrapper.
    // Ideally, we'd use ai.chats.create for stateful history, but stateless is robust for simple widgets.
    // Let's use chat mode properly.
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm not sure how to answer that, but our team definitely can! Give us a call.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please try again or call our office.";
  }
};
