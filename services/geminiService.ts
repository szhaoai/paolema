import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const apiKey = process.env.API_KEY;

// Only initialize if key exists, otherwise we are in Demo Mode
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateEventDescription = async (title: string, type: string, rules: string): Promise<string> => {
  // Demo Mode Fallback
  if (!ai) {
    console.log("Demo Mode: API Key missing, returning mock data.");
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return `【演示模式自动生成】\n这是一个关于“${title}”的精彩活动！\n\n我们将体验最正宗的${type}，大家聚在一起热热闹闹。\n\n关键是要注意：${rules}。\n\n快来报名加入我们吧，位置有限，先到先得！`;
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      你是一个名为“泡了吗？”的应用的活动组织助手。
      请为活动写一段简短、生动、有吸引力的描述（最多100字）。
      
      活动标题: ${title}
      活动类型: ${type}
      关键规则/注意事项: ${rules}

      语气: 友好、热情、社交化。
      请直接输出中文简体内容。
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "无法生成描述。";
  } catch (error) {
    console.error("Error generating content:", error);
    return "由于网络错误，描述生成失败。";
  }
};