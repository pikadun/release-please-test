import { greet } from '@release-please-test/package-a';

export function greetFromB(name: string): string {
  return `${greet(name)} via Package B`;
}

export function add(a: number, b: number): number {
  return a + b;
}
