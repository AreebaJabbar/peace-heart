-- ============================================================
-- Peace For Heart Foundation - Supabase PostgreSQL Schema
-- Copy & Run this script in the Supabase SQL Editor
-- ============================================================

-- 1. Admins Table
CREATE TABLE IF NOT EXISTS public.admins (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  goal_amount NUMERIC(12,2) DEFAULT 0,
  raised_amount NUMERIC(12,2) DEFAULT 0,
  status TEXT CHECK (status IN ('ongoing', 'completed')) DEFAULT 'ongoing',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Gallery Table
CREATE TABLE IF NOT EXISTS public.gallery (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  image TEXT NOT NULL,
  caption TEXT DEFAULT '',
  category TEXT CHECK (category IN ('Education', 'Orphan Care', 'Widow Support', 'Relief Drives', 'Events')) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Messages Table
CREATE TABLE IF NOT EXISTS public.messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) & Policies for public read
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects & gallery
CREATE POLICY "Public read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public read gallery" ON public.gallery FOR SELECT USING (true);

-- Allow public inserts for contact messages
CREATE POLICY "Public insert messages" ON public.messages FOR INSERT WITH CHECK (true);
