import { supabaseAdmin } from './supabase.js';

// ------------------------------------------------------------
// Supabase-only data layer (server side).
// Sara data Supabase mein save hota hai. MySQL / localhost nahi.
// ------------------------------------------------------------

function db() {
  if (!supabaseAdmin) {
    throw new Error(
      'Supabase is not configured. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local'
    );
  }
  return supabaseAdmin;
}

// Write fail ho to real error dikhao (silently ignore nahi)
function fail(label, error) {
  console.error(`SUPABASE ${label} ERROR:`, error);
  throw new Error(`Supabase ${label}: ${error.message}`);
}

// Read fail ho to error log karo aur page crash hone se bachao
function readFail(label, error, fallback) {
  console.error(`SUPABASE ${label} ERROR:`, error);
  return fallback;
}

// --- PROJECTS ---

export async function getProjects() {
  const { data, error } = await db()
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('id', { ascending: false });
  if (error) return readFail('getProjects', error, []);
  return data || [];
}

export async function getHomeProjects() {
  const { data, error } = await db()
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('id', { ascending: false })
    .limit(4);
  if (error) return readFail('getHomeProjects', error, []);
  return data || [];
}

export async function getProjectById(id) {
  const numericId = parseInt(id, 10);
  const { data, error } = await db().from('projects').select('*').eq('id', numericId).maybeSingle();
  if (error) return readFail('getProjectById', error, null);
  return data || null;
}

export async function createProject({ title, description, image, goal_amount, raised_amount, status, sort_order }) {
  const { data, error } = await db()
    .from('projects')
    .insert([{
      title,
      description,
      image,
      goal_amount: parseFloat(goal_amount || 0),
      raised_amount: parseFloat(raised_amount || 0),
      status: status || 'ongoing',
      sort_order: parseInt(sort_order || 0, 10),
    }])
    .select();
  if (error) fail('createProject', error);
  return data[0].id;
}

export async function updateProject(id, { title, description, image, goal_amount, raised_amount, status, sort_order }) {
  const numericId = parseInt(id, 10);
  const { error } = await db()
    .from('projects')
    .update({
      title,
      description,
      image,
      goal_amount: parseFloat(goal_amount || 0),
      raised_amount: parseFloat(raised_amount || 0),
      status: status || 'ongoing',
      sort_order: parseInt(sort_order || 0, 10),
      updated_at: new Date().toISOString(),
    })
    .eq('id', numericId);
  if (error) fail('updateProject', error);
  return true;
}

export async function deleteProject(id) {
  const numericId = parseInt(id, 10);
  const { error } = await db().from('projects').delete().eq('id', numericId);
  if (error) fail('deleteProject', error);
  return true;
}

// --- GALLERY ---

export async function getGalleryImages(category = 'All') {
  let query = db().from('gallery').select('*').order('created_at', { ascending: false });
  if (category && category !== 'All') {
    query = query.eq('category', category);
  }
  const { data, error } = await query;
  if (error) return readFail('getGalleryImages', error, []);
  return data || [];
}

export async function getHomeGallery() {
  const { data, error } = await db()
    .from('gallery')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6);
  if (error) return readFail('getHomeGallery', error, []);
  return data || [];
}

export async function getGalleryById(id) {
  const numericId = parseInt(id, 10);
  const { data, error } = await db().from('gallery').select('*').eq('id', numericId).maybeSingle();
  if (error) return readFail('getGalleryById', error, null);
  return data || null;
}

export async function createGalleryItem({ image, caption, category }) {
  const { data, error } = await db()
    .from('gallery')
    .insert([{ image, caption: caption || '', category }])
    .select();
  if (error) fail('createGalleryItem', error);
  return data[0].id;
}

export async function deleteGalleryItem(id) {
  const numericId = parseInt(id, 10);
  const { error } = await db().from('gallery').delete().eq('id', numericId);
  if (error) fail('deleteGalleryItem', error);
  return true;
}

// --- MESSAGES ---

export async function getMessages() {
  const { data, error } = await db().from('messages').select('*').order('created_at', { ascending: false });
  if (error) return readFail('getMessages', error, []);
  return data || [];
}

export async function getMessageById(id) {
  const numericId = parseInt(id, 10);
  const { data, error } = await db().from('messages').select('*').eq('id', numericId).maybeSingle();
  if (error) return readFail('getMessageById', error, null);
  return data || null;
}

export async function markMessageRead(id) {
  const numericId = parseInt(id, 10);
  const { error } = await db().from('messages').update({ is_read: true }).eq('id', numericId);
  if (error) fail('markMessageRead', error);
  return true;
}

export async function saveMessage({ name, email, subject, message }) {
  const { data, error } = await db()
    .from('messages')
    .insert([{ name, email, subject, message }])
    .select();
  if (error) fail('saveMessage', error);
  return { success: true, insertId: data[0].id };
}

export async function deleteMessage(id) {
  const numericId = parseInt(id, 10);
  const { error } = await db().from('messages').delete().eq('id', numericId);
  if (error) fail('deleteMessage', error);
  return true;
}

// --- ADMIN USERS ---
// Admin ab sirf Supabase "admins" table se aata hai (hardcoded fallback hata diya gaya hai)

export async function getAdminUserByUsername(username) {
  const cleanUsername = (username || '').trim();
  if (!cleanUsername) return null;

  const { data, error } = await db()
    .from('admins')
    .select('*')
    .ilike('username', cleanUsername)
    .maybeSingle();
  if (error) return readFail('getAdminUserByUsername', error, null);
  return data || null;
}

// --- DASHBOARD STATS ---

export async function getDashboardStats() {
  const empty = { projectCount: 0, galleryCount: 0, messageCount: 0, unreadCount: 0, recentMessages: [] };

  const [projects, gallery, messages, unread, recent] = await Promise.all([
    db().from('projects').select('*', { count: 'exact', head: true }),
    db().from('gallery').select('*', { count: 'exact', head: true }),
    db().from('messages').select('*', { count: 'exact', head: true }),
    db().from('messages').select('*', { count: 'exact', head: true }).eq('is_read', false),
    db().from('messages').select('*').order('created_at', { ascending: false }).limit(5),
  ]);

  const firstError = projects.error || gallery.error || messages.error || unread.error || recent.error;
  if (firstError) return readFail('getDashboardStats', firstError, empty);

  return {
    projectCount: projects.count || 0,
    galleryCount: gallery.count || 0,
    messageCount: messages.count || 0,
    unreadCount: unread.count || 0,
    recentMessages: recent.data || [],
  };
}

export function formatFundingLabel(goal, raised, status) {
  if (status === 'ongoing' && (parseFloat(goal) <= 0 || !goal)) {
    return 'Ongoing — active program';
  }
  const g = parseFloat(goal || 0);
  const r = parseFloat(raised || 0);
  const pct = g > 0 ? Math.round((r / g) * 100) : 0;
  return `${pct}% funded — $${r.toLocaleString()} of $${g.toLocaleString()}`;
}