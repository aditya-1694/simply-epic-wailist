-- Add dob (date of birth) column to waitlist table
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS dob DATE;
