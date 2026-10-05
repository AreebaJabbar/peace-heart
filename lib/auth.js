import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'admin_session';

export function hashPassword(plainTextPassword) {
  return bcrypt.hashSync(plainTextPassword, 10);
}

export function verifyPassword(plainTextPassword, hashedPassword) {
  if (!hashedPassword) return false;
  // Replace PHP $2y$ prefix with $2a$ if needed by bcryptjs
  const formattedHash = hashedPassword.replace(/^\$2y\$/, '$2a$');
  return bcrypt.compareSync(plainTextPassword, formattedHash);
}

export function setAdminSession(adminUser) {
  const cookieStore = cookies();
  const sessionData = JSON.stringify({
    id: adminUser.id,
    username: adminUser.username,
    loggedInAt: Date.now(),
  });
  
  // Encode session data safely
  const encoded = Buffer.from(sessionData).toString('base64');
  
  cookieStore.set(SESSION_COOKIE_NAME, encoded, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export function clearAdminSession() {
  const cookieStore = cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export function getAdminSession() {
  try {
    const cookieStore = cookies();
    const cookie = cookieStore.get(SESSION_COOKIE_NAME);
    if (!cookie || !cookie.value) return null;

    const decoded = Buffer.from(cookie.value, 'base64').toString('utf-8');
    const data = JSON.parse(decoded);
    return data;
  } catch (err) {
    return null;
  }
}

export function requireAdminAuth() {
  const session = getAdminSession();
  if (!session) {
    return null;
  }
  return session;
}
