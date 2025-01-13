import { BadRequestError } from "@/model/error/bad-request-error";
import { ServerError } from "@/model/error/server-error";

export async function fetchWithErrorHandling<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(url, options);

      if (response.ok) {
        // check if the content is empty, if not the .json() will return error
        return response.headers.get("content-length") !== "0" ? await response.json() : null;
      }

      // Check for JSON content type
      const contentType = response.headers.get('Content-Type');

      if (contentType && contentType.includes('application/problem+json')) {
          const json = await response.json();

          if (response.status === 400) {
              throw new BadRequestError(json.title || "Bad Request", json || null);
          }
          if (response.status >= 500) {
              throw new ServerError(json.errors.title || "Server Error", json || null);
          }
          console.error("Uncaught exception", json)
          // For other errors, throw a generic error with the JSON message
          throw new Error(json || 'Uncaught exception');
      }

      throw new Error('Uncaught Error with no Json result');

    } catch (error) {
        // Handle any other errors (like network errors)
        if (error instanceof SyntaxError) {
            console.error(error.message);
        }
        throw error;
    }
  }
  