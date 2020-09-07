import { parser, TokensList } from "marked";
import { writeFile, writeFileSync } from "write-file-safe";

export type MarkdownContent = string | TokensList;

export function markdownContentToString(content?: MarkdownContent) {
  if(content === undefined) {
    return "";
  } else if(typeof content === "string") {
    return content;
  } else {
    return parser(content);
  }
}

export function writeMarkdown(path: string, text?: string): Promise<void>;
export function writeMarkdown(path: string, tokensList?: TokensList): Promise<void>;
export function writeMarkdown(path: string, content?: string | TokensList) {
  return writeFile(markdownContentToString(content));
}

export function writeMarkdownSync(path: string, text?: string): void;
export function writeMarkdownSync(path: string, tokensList?: TokensList): void;
export function writeMarkdownSync(path: string, content?: string | TokensList) {
  return writeFileSync(markdownContentToString(content));
}

export {
  TokensList
}
