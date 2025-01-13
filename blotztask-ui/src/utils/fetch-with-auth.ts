import Cookies from "js-cookie"; // Use js-cookie for client-side cookies
import { fetchWithErrorHandling } from "./http-client";

export const fetchWithAuth = async<T>(url: string, options: RequestInit = {}) => {
  // Get the auth token from client-side cookies
  const accessToken = Cookies.get('authToken');

  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  // Merge headers and include Authorization
  const authHeaders = {
    ...options.headers,
    'Authorization': `Bearer ${accessToken}`,
  };

  // Return the fetch call with the attached headers
  return fetchWithErrorHandling<T>(url, {
    ...options,
    headers: authHeaders,
  });
};
