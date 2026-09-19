'use client';

import { useEffect, useState } from 'react';
import { AdminIcon } from './AdminIcons';
import { AdminShell } from './AdminShell';
import styles from './admin.module.css';

export const AdminSettings = () => {
  const [notice, setNotice] = useState('');
  const [notifications, setNotifications] = useState({ publish: true, digest: false });
  const [profile, setProfile] = useState({ name: '', email: '' });
  const save = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(''), 3000); };
  useEffect(() => { void fetch('/api/admin/settings').then((response) => response.ok ? response.json() : Promise.reject(new Error('Unable to load settings.'))).then((value) => setProfile({ name: value.name, email: value.email })).catch(() => save('Unable to load profile settings.')); }, []);
  const saveProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get('displayName') || '').trim();
    const email = String(values.get('email') || '').trim();
    if (!name || !email) {
      save('Display name and email are required.');
      return;
    }
    void fetch('/api/admin/settings', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email }) }).then((response) => response.ok ? response.json() : Promise.reject(new Error('Unable to save profile.'))).then((value) => { setProfile({ name: value.name, email: value.email }); save('Profile updated successfully.'); }).catch(() => save('Unable to save profile settings.'));
  };
  return <AdminShell title="Settings" subtitle="Manage your Neno Admin profile and workspace preferences." action={<button className={styles.primaryButton} onClick={() => save('Settings saved successfully.')}><AdminIcon name="check"/>Save changes</button>}>
    {notice && <div className={styles.notice} role="status"><AdminIcon name="check"/>{notice}</div>}
    <div className={styles.settingsGrid}><section className={styles.panel}><header className={styles.panelHeader}><div><h2>Profile</h2><p>Your admin identity in this workspace.</p></div></header><form className={styles.settingsForm} onSubmit={saveProfile}><label>Display name<input name="displayName" value={profile.name} onChange={(e) => setProfile((current) => ({ ...current, name: e.target.value }))} required/></label><label>Email address<input name="email" type="email" value={profile.email} onChange={(e) => setProfile((current) => ({ ...current, email: e.target.value }))} required/></label><label>Role<input defaultValue="Workspace administrator" disabled/></label><button className={styles.secondaryButton} type="submit">Update profile</button></form></section>
      <section className={styles.panel}><header className={styles.panelHeader}><div><h2>Notifications</h2><p>Choose what you want to hear about.</p></div></header><div className={styles.preferenceList}><label className={styles.preference}><div><strong>Publishing updates</strong><span>Confirm when your content moves live.</span></div><input type="checkbox" checked={notifications.publish} onChange={(e) => setNotifications((current) => ({ ...current, publish: e.target.checked }))}/></label><label className={styles.preference}><div><strong>Weekly content digest</strong><span>A short summary of local workspace activity.</span></div><input type="checkbox" checked={notifications.digest} onChange={(e) => setNotifications((current) => ({ ...current, digest: e.target.checked }))}/></label><button className={styles.secondaryButton} onClick={() => save('Notification preferences saved.')}>Save preferences</button></div></section>
      <section className={`${styles.panel} ${styles.settingsWide}`}><header className={styles.panelHeader}><div><h2>Password</h2><p>Update your admin password.</p></div></header><form className={styles.passwordForm} onSubmit={(e) => { e.preventDefault(); const values = new FormData(e.currentTarget); if (values.get('new') !== values.get('confirm')) { save('New passwords do not match.'); return; } void fetch('/api/admin/settings', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ currentPassword: values.get('current'), newPassword: values.get('new') }) }).then((response) => response.ok ? response.json() : response.json().then((value) => Promise.reject(new Error(value.error)))).then(() => { e.currentTarget.reset(); save('Password changed successfully.'); }).catch((error: Error) => save(error.message)); }}><label>Current password<input name="current" type="password" required/></label><label>New password<input name="new" type="password" minLength={6} required/></label><label>Confirm new password<input name="confirm" type="password" minLength={6} required/></label><button className={styles.primaryButton}>Change password</button></form></section></div>
  </AdminShell>;
};
