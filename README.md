<div align="center">
  <h1>write-md-safe</h1>
  <a href="https://npmjs.com/package/write-md-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/write-md-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/write-md-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/write-md-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/write-md-safe?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/write-md-safe.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/write-md-safe">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/write-md-safe?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Write markdown files from a [Marked](https://www.npmjs.com/package/marked) token list or string.

## Installation

```bash
yarn add write-md-safe
```

```bash
npm install write-md-safe
```

## API

### Types
```ts
import {
  writeMarkdown,
  writeMarkdownSync,
  markdownContentToString,
  MarkdownContent,
  Token, // a Marked token
  Tokens,
  Options
} from "write-md-safe";

function writeMarkdown(path: string, content?: MarkdownContent, options?: Options): Promise<void>;

function writeMarkdownSync(path: string, content?: MarkdownContent, options?: Options): void;

function markdownContentToString(content?: MarkdownContent): string;

type MarkdownContent = string | (Token | string)[];

type Options = {
  /**
   * Recursively create parent directories if needed. Default: `true`
   */
  recursive?: boolean;
  /**
   * Ensure file ends with a newline. Default: `true`
   */
  appendNewline?: boolean;
  /**
   * Write even if file already exists. Default: `true`
   */
  overwrite?: boolean;
}
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/write-md-safe.svg"></h2>

- [marked](https://www.npmjs.com/package/marked): A markdown parser built for speed
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files and create parent directories if necessary

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/write-md-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [@types/marked](https://www.npmjs.com/package/@types/marked): TypeScript definitions for Marked
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/write-md-safe.svg"></h2>

[MIT](https://mit-license.org/)

<br />

## Related Packages:

- [read-md-safe](https://npmjs.com/package/read-md-safe): Read markdown files as a Marked token list or string.
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and create parent directories if necessary.
