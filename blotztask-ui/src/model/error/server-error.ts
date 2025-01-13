export class ServerError extends Error {
    public status: number;
  
    constructor(message: string, status: number) {
      super(message);
      this.name = "ServerError";
      this.status = status;
    }
  }