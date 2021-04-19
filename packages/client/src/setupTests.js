// src/setupTests.js
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
// This configures a request mocking server with the given request handlers.
beforeAll(() => {
  // Enable the mocking in tests.
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
