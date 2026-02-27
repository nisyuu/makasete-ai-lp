// src/lib/utils.ts

/**
 * Retries an asynchronous function a specified number of times with a delay between attempts.
 * @param fn The asynchronous function to retry.
 * @param retries The maximum number of retries.
 * @param delayMs The delay in milliseconds between retries.
 * @returns The result of the function if successful.
 * @throws The last error if all retries fail.
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  let attempt = 0;
  while (attempt < retries) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      console.warn(`Attempt ${attempt} failed. Retrying in ${delayMs / 1000}s...`, error);
      if (attempt >= retries) {
        throw error; // Rethrow the last error if all attempts fail
      }
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
  // This part should technically not be reached if retries is > 0
  throw new Error("withRetry function logic error: Should have either succeeded or thrown an error.");
}

