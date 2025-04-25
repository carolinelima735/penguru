export interface CommandType {
  name: string;
  description: string;
  syntax: string;
  example: string;
  output?: string;
  category: 'navigation' | 'file' | 'system' | 'permissions';
}