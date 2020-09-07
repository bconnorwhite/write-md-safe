import { parser, TokensList } from "marked";
import { writeFile, writeFileSync } from "write-file-safe";

export function writeMarkdown(text: string): Promise<void>;
export function writeMarkdown(toListken: TokensList): Promise<void>;
export function writeMarkdown(input: string | TokensList) {
  if(typeof input === "string") {
    return writeFile(input);
  } else {
    return writeFile(parser(input));
  }
}

export function writeMarkdownSync(text: string): void;
export function writeMarkdownSync(toListken: TokensList): void;
export function writeMarkdownSync(input: string | TokensList) {
  if(typeof input === "string") {
    return writeFileSync(input);
  } else {
    return writeFileSync(parser(input));
  }
}

export {
  TokensList
}
