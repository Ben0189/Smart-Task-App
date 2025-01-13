export class UnhandledError extends Error {
    constructor(message: string = "An unexpected error occurred") {
        super(message);
        this.name = "UnhandledError";
    }
}