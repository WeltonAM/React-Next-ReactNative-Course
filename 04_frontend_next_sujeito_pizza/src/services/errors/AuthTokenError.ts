export class AuthTokenError extends Error {
    constructor() {
        super("Error: token invalid.");
    }
}