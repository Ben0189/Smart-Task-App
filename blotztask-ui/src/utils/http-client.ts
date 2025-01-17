import { BadRequestError } from '@/model/error/bad-request-error';
import { ServerError } from '@/model/error/server-error';

export async function fetchWithErrorHandling<T>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(url, options);

    const jsonResponse = await response.json();

    if (jsonResponse.error) {
      // Handle specific error codes
      if (response.status === 400) {
        throw new BadRequestError(jsonResponse.error.message || 'Bad Request', jsonResponse.error);
      }
      if (response.status >= 500) {
        throw new ServerError(jsonResponse.error.message || 'Server Error', jsonResponse.error);
      }
      throw new Error(jsonResponse.error.message || 'Unknown error occurred');
    }

    return jsonResponse;
  } catch (error) {
    // Handle parsing or network errors
    if (error instanceof SyntaxError) {
      console.error('Failed to parse JSON:', error.message);
    }
    throw error;
  }
}
