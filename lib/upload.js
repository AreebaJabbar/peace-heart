import crypto from 'crypto';
import { supabaseAdmin } from './supabase';

const BUCKET = 'uploads';
const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Image sirf Supabase Storage ("uploads" bucket) mein save hoti hai.
// Return value: image ka public URL (ye URL database mein save hota hai).
export async function saveUploadedFile(file, subfolder) {
  if (!supabaseAdmin) {
    throw new Error('Supabase is not configured. Check .env.local keys.');
  }

  if (!file || typeof file.arrayBuffer !== 'function') {
    throw new Error('No file was uploaded.');
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error('Image size is larger than 5MB.');
  }

  const nameParts = file.name ? file.name.split('.') : [];
  const ext = nameParts.length > 1 ? nameParts.pop().toLowerCase() : '';

  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    throw new Error('Only JPG, JPEG, PNG, and WEBP images are allowed.');
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `img_${crypto.randomBytes(7).toString('hex')}.${ext}`;
  const storagePath = `${subfolder}/${filename}`;
  const options = { contentType: file.type || `image/${ext}`, upsert: true };

  let { error } = await supabaseAdmin.storage.from(BUCKET).upload(storagePath, buffer, options);

  // Bucket na ho to khud bana kar dobara try karo
  if (error && /not found/i.test(error.message || '')) {
    await supabaseAdmin.storage.createBucket(BUCKET, { public: true });
    ({ error } = await supabaseAdmin.storage.from(BUCKET).upload(storagePath, buffer, options));
  }

  if (error) {
    console.error('SUPABASE STORAGE UPLOAD ERROR:', error);
    throw new Error('Image upload failed: ' + error.message);
  }

  const { data } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(storagePath);
  if (!data?.publicUrl) {
    throw new Error('Could not get public URL for uploaded image.');
  }
  return data.publicUrl;
}

// subfolder parameter purani files ke saath compatibility ke liye rakha hai
export async function deleteUploadedFile(urlOrName, subfolder) {
  if (!supabaseAdmin || !urlOrName) return;

  // Sirf Supabase URL wali images delete hoti hain
  const marker = `/${BUCKET}/`;
  const idx = urlOrName.indexOf(marker);
  if (!urlOrName.startsWith('http') || idx === -1) return;

  const key = urlOrName.substring(idx + marker.length);
  const { error } = await supabaseAdmin.storage.from(BUCKET).remove([key]);
  if (error) {
    console.error('SUPABASE STORAGE DELETE ERROR:', error);
  }
}