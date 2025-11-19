# Package B

A sample package in the monorepo that depends on Package A.

## Installation

```bash
npm install @release-please-test/package-b
```

## Usage

```typescript
import { greetFromB, add } from '@release-please-test/package-b';

console.log(greetFromB('World'));
console.log(add(2, 3)); // 5
```
