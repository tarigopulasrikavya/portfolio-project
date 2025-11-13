/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Sender's name
      - `email` (text) - Sender's email address
      - `phone` (text) - Sender's phone number (optional)
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when message was received
      - `read` (boolean) - Whether the message has been read
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public inserts (anyone can submit a contact form)
    - Add policy for authenticated admin users to read messages (for future admin panel)
  
  3. Important Notes
    - Public can only INSERT messages (submit contact forms)
    - No public read access to maintain privacy
    - Messages are stored securely for portfolio owner to review
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);