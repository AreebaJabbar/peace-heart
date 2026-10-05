# Peace For Heart Foundation — PHP Backend + Admin Panel

Ye package aapki static website (HTML) ko ek **dynamic PHP + MySQL website**
mein convert karta hai, jahan aap "Our Projects" aur "Gallery" ki pictures
admin panel se add/edit/delete kar saktay hain — koi code likhne ki zaroorat
nahi.

## Kya kya mila hai is backend mein

- **Admin Panel** (`/admin`) — login ke baad:
  - **Dashboard** — quick stats
  - **Our Projects** — add / edit / delete projects (title, description,
    picture, funding amount, status) — yehi wo jagah hai jahan se aap
    "Our Projects" ki pics add karain gay
  - **Gallery** — upload / delete gallery images with category
  - **Messages** — Contact form se aane wale messages yahan save hotay hain
- **Dynamic pages** (public site): `index.php`, `programs.php`,
  `gallery.php`, `contact.php` — ye ab database se data laatay hain
  (pehlay hardcoded tha)
- Baqi pages (`about.html`, `mission.html`, `team.html`, `donate.html`)
  waisay hi static hain jaisay pehlay thay.

## Setup (XAMPP / local ya hosting per)

1. **Database banayein**: phpMyAdmin (ya kisi bhi MySQL client) mein
   `database.sql` file import karein. Ye `peace_for_heart` database aur
   sari tables bana dega.

2. **Database connection set karein**: `config/db.php` file kholein aur
   apni hosting/XAMPP ki details daalein:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'peace_for_heart');
   define('DB_USER', 'root');
   define('DB_PASS', '');
   ```

3. **Poora `backend` folder** apne server ke web root mein upload karein
   (XAMPP mein `htdocs/peace-for-heart`, ya cPanel mein `public_html`).

4. **Apna admin account banayein**: browser mein kholein:
   ```
   yoursite.com/admin/setup.php
   ```
   Username/password set karein — account create ho jayega.
   **Zaroori: setup.php file ko is ke baad server se delete kar dein**,
   security ke liye (ye sirf ek dafa chalta hai).

5. **Login karein**: `yoursite.com/admin/login.php`

6. Ab **Our Projects → Add New Project** per jaakar apni pics upload karain —
   wo automatically `programs.php` aur homepage (`index.php`) per show
   hongi. Same tarah **Gallery → Add New Image** se gallery pics add hongi.

## Folder structure

```
config/db.php          → database connection settings
includes/functions.php → shared helper functions (auth, uploads, escaping)
admin/                 → poora admin panel (login, dashboard, CRUD)
uploads/projects/      → project images yahan save hoti hain
uploads/gallery/       → gallery images yahan save hoti hain
programs.php           → "Our Projects" (dynamic)
gallery.php            → "Gallery" (dynamic, category filter ke sath)
contact.php            → contact form (database mein save + admin panel mein visible)
index.php              → homepage (top 4 projects dynamic)
database.sql           → import karne wala schema
```

## Security notes

- Passwords bcrypt se hashed hain (`password_hash`), plain text nahi.
- Sab admin forms CSRF-protected hain.
- Image uploads validate hotay hain (type, size, real image check) aur
  unique naam se save hotay hain.
- `uploads/.htaccess` uploaded files ko PHP ki tarah run hone se rokta hai.
- Sab database queries prepared statements use karti hain (SQL injection
  se mehfooz).

## Aage extend karna ho (optional)

Agar aap chahain to isi tarah **Team members**, **homepage stats**, ya
**site settings (phone/email/address)** ko bhi admin panel se editable
bana sakte hain — abhi wo static HTML mein hain. Bata dein to wo bhi
add kar deta hoon.
