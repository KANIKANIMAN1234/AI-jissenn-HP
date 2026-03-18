-- Add image_url column to success_stories table
ALTER TABLE success_stories 
ADD COLUMN IF NOT EXISTS image_url TEXT DEFAULT '';
