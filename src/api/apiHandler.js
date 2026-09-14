import apiConfig from "./apiConfig";

const apiHandler = async (
  method = "GET",
  endpoint,
  data = null,
  params = null,
  signal,
) => {
  const url = new URL(`${apiConfig.BASE_URL}${endpoint}`);

  // Add query parameters
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const response = await fetch(url.toString(), {
    method,
    signal,
    headers: {
      ...apiConfig.headers,

      // Only needed when sending a body
      ...(data && { "Content-type": "application/json" }),
    },

    // POST / PUT / PATCH
    ...(data && {
      body: JSON.stringify(data),
    }),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  // DELETE may return 204 with no body
  if (response.status === 204) {
    return null;
  }

  return response.json();
};

export default apiHandler;
