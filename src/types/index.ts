import type z from "zod";

export interface ToolDefinition {
  name: string;
  config: {
    title: string;
    description: string;
    inputSchema: Record<string, z.ZodTypeAny>;
  }
  callback: (args: any) => Promise<{ content: Array<{ type: string; data?: string, mimeType?: string, text?: string }> }>;
}