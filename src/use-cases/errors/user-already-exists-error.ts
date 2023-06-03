/* eslint-disable require-jsdoc */
export class UserAlreadyExistsError extends Error {
  constructor() {
    super('E-mail already exists.');
  }
}
