CREATE TABLE IF NOT EXISTS public.logs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  timestamp timestamp with time zone NOT NULL DEFAULT now(),
  event_id uuid NOT NULL DEFAULT gen_random_uuid(),
  category text NOT NULL,
  severity text NOT NULL,
  user_email text NULL,
  role text NULL,
  ip text NOT NULL,
  client text NULL,
  user_agent text NULL,
  referer text NULL,
  method text NOT NULL,
  resource text NOT NULL,
  status_code integer NOT NULL DEFAULT 200,
  attack_types text[] NULL,
  message text NOT NULL,
  CONSTRAINT logs_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;

ALTER TABLE public.logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "auth_insert_logs" ON public.logs;
CREATE POLICY "auth_insert_logs"
  ON public.logs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_logs" ON public.logs;
CREATE POLICY "auth_select_logs"
  ON public.logs
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "auth_delete_logs" ON public.logs;
CREATE POLICY "auth_delete_logs"
  ON public.logs
  FOR DELETE
  TO authenticated
  USING (true);
