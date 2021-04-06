import { beforeEach, test, expect } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { readFile } from "read-file-safe";
import { writeMarkdownSync } from "../source";

beforeEach(async () => {
  mock({
    "/test": {}
  });
});

afterEach(async () => {
  restore();
});

test("write", async () => {
  expect(writeMarkdownSync("/test/file.md", "# Title")).toBe(true);
  return readFile("/test/file.md").then((text) => {
    expect(text).toBe("# Title\n");
  });
});

test("write no newline", async () => {
  expect(writeMarkdownSync("/test/file.md", "# Title", { appendNewline: false })).toBe(true);
  return readFile("/test/file.md").then((text) => {
    expect(text).toBe("# Title");
  });
});

test("write", async () => {
  expect(writeMarkdownSync("/test/file.md", "# Title")).toBe(true);
  return readFile("/test/file.md").then((text) => {
    expect(text).toBe("# Title\n");
  });
});
