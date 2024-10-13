// setup-jest.ts
import 'jest-preset-angular/setup-jest';

global.structuredClone = jest.fn(val => {
  return JSON.parse(JSON.stringify(val));
});