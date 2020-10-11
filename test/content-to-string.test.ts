import { test, expect } from "@jest/globals";
import { markdownContentToString, Token, Tokens } from "../source";

test("string to string", () => {
  expect(markdownContentToString("# Title")).toBe("# Title");
});

test("undefined to string", () => {
  expect(markdownContentToString()).toBe("");
});

const tokens: (Token | string)[] = [{
  type: "heading",
  raw: "# Title\n",
  depth: 1,
  text: "Title",
  tokens: [{
    type: "text",
    raw: "Title",
    text: "Title"
  }]
} as Tokens.Heading];

test("tokens to string", () => {
  expect(markdownContentToString(tokens)).toBe("# Title\n");
});

test("mixed to string", () => {
  expect(markdownContentToString(tokens.concat("## Subtitle"))).toBe("# Title\n## Subtitle");
});

test("string to string", () => {
  expect("# Title").toBe("# Title");
});
