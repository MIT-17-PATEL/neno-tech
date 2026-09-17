'use client';

import { useRef } from 'react';
import { toAdminDateInput, toStoredAdminDate } from '@/lib/admin/dateUtils';
import { AdminIcon } from './AdminIcons';
import styles from './admin.module.css';

type Props = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  name?: string;
  id?: string;
  'aria-label'?: string;
};

const formatTyping = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}:${digits.slice(2).padStart(2, '0')}`;
  return `${digits.slice(0, 2)}:${digits.slice(2, 4)}:${digits.slice(4)}`;
};

export const DateInput = ({ value, onChange, error, name, id, ...aria }: Props) => {
  const pickerRef = useRef<HTMLInputElement>(null);
  const handleBlur = () => {
    const normalized = toAdminDateInput(value);
    if (normalized) onChange(normalized);
  };
  const openPicker = () => {
    const picker = pickerRef.current;
    if (!picker) return;
    if (typeof picker.showPicker === 'function') picker.showPicker();
    else picker.click();
  };
  return <span className={styles.dateInputWrap}>
    <input id={id} name={name} value={value} onChange={(event) => onChange(formatTyping(event.target.value))} onBlur={handleBlur} placeholder="DD:MM:YYYY" inputMode="numeric" maxLength={10} {...aria} />
    <button type="button" className={styles.datePickerButton} onClick={openPicker} aria-label="Open calendar"><AdminIcon name="calendar" /></button>
    <input ref={pickerRef} className={styles.hiddenDatePicker} type="date" value={toStoredAdminDate(value)} onChange={(event) => onChange(toAdminDateInput(event.target.value))} tabIndex={-1} aria-hidden="true" />
    {error && <small>{error}</small>}
  </span>;
};
