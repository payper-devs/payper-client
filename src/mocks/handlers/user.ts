import { http, HttpResponse, delay } from "msw";

// Types for user domain
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

// Mock data - in enterprise apps, this would be in a separate fixtures file
const mockUsers: User[] = [
  {
    id: "1",
    email: "user@example.com",
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    createdAt: "2024-01-01T00:00:00Z",
  },
];

// Base API URL - should match your environment config
const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

/**
 * User domain handlers
 * Organized by resource and HTTP method for maintainability
 */
export const userHandlers = [
  // GET /api/users - List all users
  http.get(`${API_BASE}/users`, async () => {
    await delay(150); // Simulate network latency
    return HttpResponse.json(mockUsers);
  }),

  // GET /api/users/:id - Get single user
  http.get(`${API_BASE}/users/:id`, async ({ params }) => {
    await delay(100);
    const user = mockUsers.find((u) => u.id === params.id);

    if (!user) {
      return HttpResponse.json(
        { error: "User not found" },
        { status: 404 },
      );
    }

    return HttpResponse.json(user);
  }),

  // GET /api/me - Get current user (auth endpoint)
  http.get(`${API_BASE}/me`, async () => {
    await delay(100);
    return HttpResponse.json(mockUsers[0]);
  }),

  // POST /api/users - Create user
  http.post(`${API_BASE}/users`, async ({ request }) => {
    await delay(200);
    const body = (await request.json()) as Partial<User>;

    const newUser: User = {
      id: String(mockUsers.length + 1),
      email: body.email || "",
      name: body.name || "",
      avatar: body.avatar,
      createdAt: new Date().toISOString(),
    };

    mockUsers.push(newUser);
    return HttpResponse.json(newUser, { status: 201 });
  }),

  // PATCH /api/users/:id - Update user
  http.patch(`${API_BASE}/users/:id`, async ({ params, request }) => {
    await delay(150);
    const userIndex = mockUsers.findIndex((u) => u.id === params.id);

    if (userIndex === -1) {
      return HttpResponse.json(
        { error: "User not found" },
        { status: 404 },
      );
    }

    const body = (await request.json()) as Partial<User>;
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...body };

    return HttpResponse.json(mockUsers[userIndex]);
  }),

  // DELETE /api/users/:id - Delete user
  http.delete(`${API_BASE}/users/:id`, async ({ params }) => {
    await delay(100);
    const userIndex = mockUsers.findIndex((u) => u.id === params.id);

    if (userIndex === -1) {
      return HttpResponse.json(
        { error: "User not found" },
        { status: 404 },
      );
    }

    mockUsers.splice(userIndex, 1);
    return new HttpResponse(null, { status: 204 });
  }),
];
