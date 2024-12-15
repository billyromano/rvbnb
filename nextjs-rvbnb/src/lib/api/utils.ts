import { APIError } from '@/lib/errors';

export async function fetchWithTimeout(
  input: RequestInfo | URL,
  init?: RequestInit & { timeout?: number }
) {
  const { timeout = 5000, ...options } = init || {};

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(input, {
      ...options,
      signal: controller.signal
    });

    if (!response.ok) {
      throw new APIError(
        `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    return response;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new APIError('Request timeout', 408);
    }
    throw error;
  } finally {
    clearTimeout(id);
  }
}

export function createQueryString(params: Record<string, string | number | boolean>) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });
  return searchParams.toString();
}

export async function handleApiResponse<T>(response: Response): Promise<T> {
  try {
    const data = await response.json();
    if (!response.ok) {
      throw new APIError(
        data.message || 'API request failed',
        response.status,
        data.code
      );
    }
    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(
      'Failed to parse API response',
      500
    );
  }
}