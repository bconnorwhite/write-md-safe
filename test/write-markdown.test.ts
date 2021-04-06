import { beforeEach, test, expect } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { readFile } from "read-file-safe";
import { writeMarkdown } from "../source";

beforeEach(async () => {
  mock({
    "/test": {}
  });
});

afterEach(async () => {
  restore();
});

test("write", async () => {
  return writeMarkdown("/test/file.md", "# Title").then(async (success) => {
    expect(success).toBe(true);
    return readFile("/test/file.md").then((text) => {
      expect(text).toBe("# Title\n");
    });
  });
});

test("write no newline", async () => {
  return writeMarkdown("/test/file.md", "# Title", { appendNewline: false }).then(async (success) => {
    expect(success).toBe(true);
    return readFile("/test/file.md").then((text) => {
      expect(text).toBe("# Title");
    });
  });
});

test("write", async () => {
  return writeMarkdown("/test/file.md", "# Title").then(async (success) => {
    expect(success).toBe(true);
    return readFile("/test/file.md").then((text) => {
      expect(text).toBe("# Title\n");
    });
  });
});
