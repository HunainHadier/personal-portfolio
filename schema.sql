-- Brightside Bookings database schema
-- Matches the current website booking + contact flow.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Services
CREATE TABLE IF NOT EXISTS public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NULL,
  category TEXT NULL,
  price TEXT NULL,
  active BOOLEAN NULL DEFAULT true,
  created_at TIMESTAMPTZ NULL DEFAULT now(),
  CONSTRAINT services_pkey PRIMARY KEY (id),
  CONSTRAINT services_name_key UNIQUE (name)
) TABLESPACE pg_default;

-- Slots
CREATE TABLE IF NOT EXISTS public.slots (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  time TEXT NOT NULL,
  is_booked BOOLEAN NULL DEFAULT false,
  created_at TIMESTAMPTZ NULL DEFAULT now(),
  CONSTRAINT slots_pkey PRIMARY KEY (id),
  CONSTRAINT slots_date_time_key UNIQUE (date, "time")
) TABLESPACE pg_default;

-- Bookings
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NULL,
  service TEXT NOT NULL,
  industry TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  duration INTEGER NOT NULL,
  message TEXT NULL,
  meet_link TEXT NULL,
  calendar_event_id TEXT NULL,
  status TEXT NULL DEFAULT 'confirmed'::text,
  created_at TIMESTAMPTZ NULL DEFAULT now(),
  CONSTRAINT bookings_pkey PRIMARY KEY (id),
  CONSTRAINT bookings_status_check CHECK (
    status = ANY (ARRAY['pending'::text, 'confirmed'::text, 'completed'::text])
  )
) TABLESPACE pg_default;

-- Contact messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NULL,
  message TEXT NOT NULL,
  source TEXT NULL DEFAULT 'website',
  created_at TIMESTAMPTZ NULL DEFAULT now(),
  CONSTRAINT contact_messages_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read of services" ON public.services;
CREATE POLICY "Allow public read of services"
  ON public.services
  FOR SELECT
  USING (active = true);

DROP POLICY IF EXISTS "Allow public read of slots" ON public.slots;
CREATE POLICY "Allow public read of slots"
  ON public.slots
  FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow public upsert of slots" ON public.slots;
CREATE POLICY "Allow public upsert of slots"
  ON public.slots
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update of slots" ON public.slots;
CREATE POLICY "Allow public update of slots"
  ON public.slots
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public insert of bookings" ON public.bookings;
CREATE POLICY "Allow public insert of bookings"
  ON public.bookings
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public insert of contact messages" ON public.contact_messages;
CREATE POLICY "Allow public insert of contact messages"
  ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Seeds
INSERT INTO public.services (name, description, category, active) VALUES
('Mobile App Development', 'Mobile and business apps designed for usability, speed, and long-term scale.', 'Startups', true),
('Web Development', 'Corporate websites, product sites, and landing pages built for credibility and conversion.', 'Agencies', true),
('Shopify Development', 'Custom Shopify storefronts optimized for conversion and easy store management.', 'E-Commerce', true),
('Amazon Services', 'Amazon marketplace support for product hunting, listing optimization, and PPC.', 'E-Commerce', true),
('Graphic Design', 'Brand identity and marketing design systems for social media and campaigns.', 'Agencies', true),
('Video Editing', 'Professional short-form and long-form editing for brand content and ads.', 'Personal Brands', true),
('Digital Marketing', 'Lead generation, campaign planning, and funnel optimization for growth.', 'Agencies', true),
('Data Solutions', 'Business data preparation, labeling, and analytics support.', 'SaaS Businesses', true),
('SEO Services', 'On-page, technical, and keyword strategy for organic growth.', 'Agencies', true),
('SaaS Development', 'Full SaaS product development, subscription flows, and product architecture.', 'SaaS Businesses', true),
('WordPress Development', 'Custom WordPress websites, themes, and CMS implementations.', 'Education', true),
('AI Development', 'Workflow automation and AI integrations for modern operations.', 'Startups', true),
('UI/UX Design', 'Wireframes, prototypes, and design systems for apps and software products.', 'SaaS Businesses', true),
('Custom Web App Development', 'Operational dashboards and custom internal tools for teams.', 'SaaS Businesses', true),
('E-Commerce Business Startup', 'End-to-end store setup for new online businesses.', 'E-Commerce', true),
('Website Maintenance & Support', 'Bug fixes, updates, and performance improvements for existing websites.', 'Agencies', true),
('Consultation', 'Technical consultancy, architecture reviews, and stack optimization.', 'Startups', true)
ON CONFLICT (name) DO NOTHING;

-- Seed weekday working slots for the next 12 months.
DO $$
DECLARE
  slot_date DATE;
  slot_time TEXT;
  slot_times TEXT[] := ARRAY[
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30'
  ];
BEGIN
  FOR slot_date IN
    SELECT generate_series(current_date, current_date + INTERVAL '365 days', INTERVAL '1 day')::date
  LOOP
    IF EXTRACT(ISODOW FROM slot_date) BETWEEN 1 AND 5 THEN
      FOREACH slot_time IN ARRAY slot_times LOOP
        INSERT INTO public.slots (date, time, is_booked)
        VALUES (slot_date, slot_time, false)
        ON CONFLICT (date, "time") DO NOTHING;
      END LOOP;
    END IF;
  END LOOP;
END $$;
