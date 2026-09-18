const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const parseAdminDate = (value: string): { day: number; month: number; year: number } | null => {
  const trimmed = value.trim();
  const inputMatch = /^(\d{2}):(\d{2}):(\d{4})$/.exec(trimmed);
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  const day = inputMatch ? Number(inputMatch[1]) : isoMatch ? Number(isoMatch[3]) : 0;
  const month = inputMatch ? Number(inputMatch[2]) : isoMatch ? Number(isoMatch[2]) : 0;
  const year = inputMatch ? Number(inputMatch[3]) : isoMatch ? Number(isoMatch[1]) : 0;
  if (!day || !month || year < 1 || month < 1 || month > 12 || day < 1 || day > new Date(Date.UTC(year, month, 0)).getUTCDate()) return null;
  return { day, month, year };
};

export const formatAdminDate = (value: string, emptyLabel = '—') => {
  const parsed = parseAdminDate(value);
  return parsed ? `${MONTHS[parsed.month - 1]} ${parsed.day}, ${parsed.year}` : emptyLabel;
};

export const toAdminDateInput = (value: string) => {
  const parsed = parseAdminDate(value);
  return parsed ? `${String(parsed.day).padStart(2, '0')}:${String(parsed.month).padStart(2, '0')}:${parsed.year}` : '';
};

export const formatAdminDateInput = (value: string) => toAdminDateInput(value);

export const toStoredAdminDate = (value: string) => {
  const parsed = parseAdminDate(value);
  return parsed ? `${parsed.year}-${String(parsed.month).padStart(2, '0')}-${String(parsed.day).padStart(2, '0')}` : '';
};
