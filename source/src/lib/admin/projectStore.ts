import type { Project, ProjectInput, ContentStatus } from '@/types/admin';

const request = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  const raw = await response.text();
  let body: unknown = null;
  if (raw.trim()) {
    try {
      body = JSON.parse(raw) as unknown;
    } catch {
      body = null;
    }
  }

  if (!response.ok) {
    const message =
      body && typeof body === 'object' && 'error' in body && typeof (body as { error: unknown }).error === 'string'
        ? (body as { error: string }).error
        : `Admin project request failed (${response.status}).`;
    throw new Error(message);
  }

  return body as T;
};

/**
 * Load all projects directly from PostgreSQL.
 * PostgreSQL is the single source of truth.
 */
export const getProjects = async (): Promise<Project[]> => {
  return request<Project[]>('/api/admin/content/projects', {
    cache: 'no-store',
  });
};

/**
 * Create a new project directly in PostgreSQL.
 */
export const createProject = async (input: ProjectInput): Promise<Project> => {
  return request<Project>('/api/admin/content/projects', {
    method: 'POST',
    body: JSON.stringify(input),
  });
};

/**
 * Update an existing project directly in PostgreSQL.
 */
export const updateProject = async (id: string, input: Partial<ProjectInput>): Promise<Project> => {
  return request<Project>(`/api/admin/content/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(input),
  });
};

/**
 * Delete a project directly from PostgreSQL.
 */
export const deleteProject = async (id: string): Promise<void> => {
  await request<{ ok: boolean }>(`/api/admin/content/projects/${id}`, {
    method: 'DELETE',
  });
};

/**
 * Update the publish status of a project in PostgreSQL.
 */
export const setProjectStatus = async (id: string, status: ContentStatus): Promise<Project> => {
  return updateProject(id, { status });
};
