
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface StrategyResponse {
  title: string;
  summary: string;
  highlights: string[];
  vibe: string;
}

export const generateMarketingStrategy = async (details: string): Promise<StrategyResponse> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Actúa como un director creativo de Dactilar Agencia de Publicidad. Genera una estrategia de marketing digital de alto nivel para el siguiente producto o negocio: ${details}. 
    Define un nombre de campaña, un resumen ejecutivo, canales clave y el tono de voz.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Nombre de la campaña creativa" },
          summary: { type: Type.STRING, description: "Resumen de la estrategia" },
          highlights: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Puntos clave de la ejecución"
          },
          vibe: { type: Type.STRING, description: "Tono de voz y estilo visual" }
        },
        required: ["title", "summary", "highlights", "vibe"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    throw new Error("Failed to parse AI response");
  }
};
