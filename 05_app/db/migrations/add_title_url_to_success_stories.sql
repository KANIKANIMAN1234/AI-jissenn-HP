-- Add title_url column to success_stories table
ALTER TABLE success_stories 
ADD COLUMN IF NOT EXISTS title_url TEXT DEFAULT '';
