export class BadRequestError extends Error {
    public details: Record<string, string[]> | null;

    constructor(message: string, details: Record<string, string[]> | null = null) {
        super(message);
        this.name = "BadRequestError";
        this.details = details;
    }
}