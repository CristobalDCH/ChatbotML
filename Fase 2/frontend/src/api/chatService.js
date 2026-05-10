const API_BASE_URL =
  import.meta.env.VITE_API_URL ?? 'http://localhost:5000';

/**
 * Sends a message to the chatbot API.
 * @param {string} message
 * @returns {Promise<{ response: string, source: string|null }>}
 */
export async function sendChatMessage(message) {

  const res = await fetch(`${API_BASE_URL}/chat`, {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      message
    }),
  });

  if (!res.ok) {

    let detail = `Error ${res.status}`;

    try {
      const data = await res.json();
      detail = data.detail ?? detail;
    } catch {

    }

    throw new Error(detail);
  }

  return await res.json();
}