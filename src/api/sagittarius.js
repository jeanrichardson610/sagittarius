import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client
const client = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

// Function to send prompt to Gemini
export const askGemini = async (prompt) => {
  try {
    const model = 'gemini-2.5-flash';
    const config = { thinkingConfig: { thinkingBudget: -1 } };
    const contents = [{ role: 'user', parts: [{ text: prompt }] }];

    const response = [];
    for await (const chunk of await client.models.generateContentStream({
      model,
      config,
      contents,
    })) {
      response.push(chunk.text);
    }

    return response.join('');
  } catch (err) {
    console.error('Error calling Gemini API:', err);
    return 'Error fetching response from Gemini.';
  }
};
