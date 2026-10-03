CREATE TABLE public.lead_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL CHECK (form_type IN ('free_ideas', 'contact', 'quote')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  business_name text CHECK (business_name IS NULL OR char_length(business_name) <= 120),
  industry text CHECK (industry IS NULL OR char_length(industry) <= 120),
  city text CHECK (city IS NULL OR char_length(city) <= 100),
  social_handle text CHECK (social_handle IS NULL OR char_length(social_handle) <= 200),
  website text CHECK (website IS NULL OR char_length(website) <= 300),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  email text CHECK (email IS NULL OR char_length(email) <= 255),
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.lead_submissions TO service_role;
ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;
CREATE INDEX lead_submissions_created_at_idx ON public.lead_submissions (created_at DESC);
COMMENT ON TABLE public.lead_submissions IS 'Private NOIRE website enquiries; accessible only by trusted server code.';