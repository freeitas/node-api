/* eslint-disable require-jsdoc */
export class InvalidCredentialsError extends Error {
  constructor() {
    super('Invalid credentials.');
  }
}
