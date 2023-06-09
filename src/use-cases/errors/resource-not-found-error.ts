/* eslint-disable require-jsdoc */
export class ResourceNotFoundError extends Error {
  constructor() {
    super('Resource not found.');
  }
}
