import test from "node:test";
import assert from "node:assert/strict";
import { hello } from "./hello.js";

test("retorna a saudação padrão", () => {
  assert.equal(hello(), "Hello, World!");
});

test("retorna a saudação com nome", () => {
  assert.equal(hello("Pedro"), "Hello, Pedro!");
});
