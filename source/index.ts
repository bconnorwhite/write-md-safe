import { Token, Tokens } from "marked";
import { writeFile, writeFileSync, Options } from "write-file-safe";

export type MarkdownContent = string | (Token | string)[];

export function markdownContentToString(content: MarkdownContent = "") {
  if(typeof content === "string") {
    return content;
  } else {
    return content.reduce((retval: string, item) => {
      if(typeof item === "string") {
        return retval + item;
      } else {
        return retval + item.raw;
      }
    }, "");
  }
}

export function writeMarkdown(path: string, content?: MarkdownContent, options?: Options) {
  return writeFile(path, markdownContentToString(content), options);
}

export function writeMarkdownSync(path: string, content?: MarkdownContent, options?: Options) {
  return writeFileSync(path, markdownContentToString(content), options);
}

export {
  Options,
  Token,
  Tokens
};
