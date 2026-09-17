import type { CaseStudy, CaseStudyInput, ContentStatus } from '@/types/admin';

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
        : `Admin case study request failed (${response.status}).`;
    throw new Error(message);
  }

  return body as T;
};

/**
 * Load all case studies directly from PostgreSQL.
 * PostgreSQL is the single source of truth.
 */
export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  return request<CaseStudy[]>('/api/admin/content/case-studies', {
    cache: 'no-store',
  });
};

/**
 * Create a new case study directly in PostgreSQL.
 */
export const createCaseStudy = async (input: CaseStudyInput): Promise<CaseStudy> => {
  return request<CaseStudy>('/api/admin/content/case-studies', {
    method: 'POST',
    body: JSON.stringify(input),
  });
};

/**
 * Update an existing case study directly in PostgreSQL.
 */
export const updateCaseStudy = async (id: string, input: Partial<CaseStudyInput>): Promise<CaseStudy> => {
  return request<CaseStudy>(`/api/admin/content/case-studies/${id}`, {
    method: 'PUT',
    body: JSON.stringify(input),
  });
};

/**
 * Delete a case study directly from PostgreSQL.
 */
export const deleteCaseStudy = async (id: string): Promise<void> => {
  await request<{ ok: boolean }>(`/api/admin/content/case-studies/${id}`, {
    method: 'DELETE',
  });
};

/**
 * Update the publish status of a case study in PostgreSQL.
 */
export const setCaseStudyStatus = async (id: string, status: ContentStatus): Promise<CaseStudy> => {
  return updateCaseStudy(id, { status });
};
