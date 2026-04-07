-- Add uuid-ossp extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Add uuid column to waitlist table with default UUID generation
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS uuid UUID UNIQUE DEFAULT gen_random_uuid();

-- Update any existing rows to have a UUID if they don't
UPDATE waitlist SET uuid = gen_random_uuid() WHERE uuid IS NULL;

-- Make the uuid column NOT NULL after all rows have values
ALTER TABLE waitlist ALTER COLUMN uuid SET NOT NULL;
