import { http, HttpResponse, delay } from "msw";

// Types for auth domain
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface RefreshRequest {
  refreshToken: string;
}

// Base API URL
const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

// Mock tokens for development
const MOCK_ACCESS_TOKEN = "mock-access-token-xxx";
const MOCK_REFRESH_TOKEN = "mock-refresh-token-xxx";

/**
 * Authentication handlers
 * Covers login, logout, token refresh flows
 */
export const authHandlers = [
  // POST /api/auth/login - User login
  http.post(`${API_BASE}/auth/login`, async ({ request }) => {
    await delay(300); // Simulate auth latency
    const body = (await request.json()) as LoginRequest;

    // Simulate validation
    if (!body.email || !body.password) {
      return HttpResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    // Simulate invalid credentials
    if (body.password === "invalid") {
      return HttpResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    const response: LoginResponse = {
      accessToken: MOCK_ACCESS_TOKEN,
      refreshToken: MOCK_REFRESH_TOKEN,
      expiresIn: 3600,
    };

    return HttpResponse.json(response);
  }),

  // POST /api/auth/logout - User logout
  http.post(`${API_BASE}/auth/logout`, async () => {
    await delay(100);
    return new HttpResponse(null, { status: 204 });
  }),

  // POST /api/auth/refresh - Refresh access token
  http.post(`${API_BASE}/auth/refresh`, async ({ request }) => {
    await delay(150);
    const body = (await request.json()) as RefreshRequest;

    if (!body.refreshToken) {
      return HttpResponse.json(
        { error: "Refresh token is required" },
        { status: 400 },
      );
    }

    // Simulate expired refresh token
    if (body.refreshToken === "expired") {
      return HttpResponse.json(
        { error: "Refresh token expired" },
        { status: 401 },
      );
    }

    const response: LoginResponse = {
      accessToken: `${MOCK_ACCESS_TOKEN}-refreshed`,
      refreshToken: MOCK_REFRESH_TOKEN,
      expiresIn: 3600,
    };

    return HttpResponse.json(response);
  }),

  // POST /api/auth/register - User registration
  http.post(`${API_BASE}/auth/register`, async ({ request }) => {
    await delay(400);
    const body = (await request.json()) as {
      email: string;
      password: string;
      name: string;
    };

    if (!body.email || !body.password || !body.name) {
      return HttpResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Simulate email already exists
    if (body.email === "existing@example.com") {
      return HttpResponse.json(
        { error: "Email already registered" },
        { status: 409 },
      );
    }

    return HttpResponse.json(
      {
        id: "new-user-id",
        email: body.email,
        name: body.name,
      },
      { status: 201 },
    );
  }),
];
