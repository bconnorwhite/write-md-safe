<div align="center">
  <h1>write-md-safe</h1>
  <a href="https://npmjs.com/package/write-md-safe">
    <img alt="npm" src="https://img.shields.io/npm/v/write-md-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/write-md-safe">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/write-md-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/write-md-safe">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/write-md-safe?label=Stars%20Appreciated%21&style=social">
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
### Usage
```ts
import { writeMarkdown, writeMarkdownSync } from "write-file-safe";

writeMarkdown("# My Markdown String").then(() => {
  // done
});

```
### Types
```ts
import {
  writeMarkdown,
  writeMarkdownSync,
  markdownContentToString,
  MarkdownContent,
  TokensList
} from "write-file-safe";

function writeMarkdown(path: string, content: MarkdownContent): Promise<void>;

function writeMarkdownSync(path: string, content: MarkdownContent): void;

function markdownContentToString(content?: MarkdownContent): string;

type MarkdownContent = string | TokensList;

// a Marked token list
type TokensList = Token[] & {
  links: {
    [key: string]: {
      href: string | null;
      title: string | null;
    };
  };
}
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/write-md-safe.svg"></h2>

- [marked](https://www.npmjs.com/package/marked): A markdown parser built for speed
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and create parent directories if necessary.

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/write-md-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [@types/marked](https://www.npmjs.com/package/@types/marked): TypeScript definitions for Marked

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/write-md-safe.svg"></h2>

[MIT](https://mit-license.org/)

<br />

## Related Packages:
- [marked](https://www.npmjs.com/package/marked): A markdown parser built for speed
- [read-md-safe](https://npmjs.com/package/read-md-safe): Read markdown files as a Marked token list or string.
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and create parent directories if necessary.

