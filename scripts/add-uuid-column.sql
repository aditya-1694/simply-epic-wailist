-- Add uuid-ossp extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Add member_uuid column to waitlist table with default UUID generation
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS member_uuid UUID UNIQUE DEFAULT gen_random_uuid();

-- Update any existing rows to have a UUID if they don't
UPDATE waitlist SET member_uuid = gen_random_uuid() WHERE member_uuid IS NULL;

-- Make the member_uuid column NOT NULL after all rows have values
ALTER TABLE waitlist ALTER COLUMN member_uuid SET NOT NULL;
