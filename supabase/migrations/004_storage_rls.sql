-- ============================================================
-- SEGURIDAD: Bucket de almacenamiento "evidencias"
-- ============================================================
-- Esta migración asume que el bucket "evidencias" ya existe.
-- Ejecutar en SQL Editor de Supabase.

-- 1. HABILITAR RLS en el bucket
-- NOTA: Supabase Storage RLS se configura desde la tabla
-- `storage.objects`, NO desde SQL directo del bucket.

-- Política: anónimos pueden SUBIR archivos (formulario público)
DROP POLICY IF EXISTS "anon_insert_evidencias" ON storage.objects;
CREATE POLICY "anon_insert_evidencias"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (
    bucket_id = 'evidencias'
    AND lower(right(name, 4)) IN ('.jpg', 'jpeg', '.png')
    AND octet_length(name) < 256
    AND array_length(regexp_split_to_array(name, '/'), 1) <= 3
  );

-- Política: anónimos pueden LEER archivos (ver imágenes)
DROP POLICY IF EXISTS "anon_select_evidencias" ON storage.objects;
CREATE POLICY "anon_select_evidencias"
  ON storage.objects
  FOR SELECT
  TO anon
  USING (bucket_id = 'evidencias');

-- Política: autenticados pueden LEER archivos
DROP POLICY IF EXISTS "auth_select_evidencias" ON storage.objects;
CREATE POLICY "auth_select_evidencias"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (bucket_id = 'evidencias');

-- Política: autenticados pueden ELIMINAR archivos
DROP POLICY IF EXISTS "auth_delete_evidencias" ON storage.objects;
CREATE POLICY "auth_delete_evidencias"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'evidencias');

-- ============================================================
-- VALIDACIÓN de tipo MIME en subida (PostgreSQL trigger)
-- ============================================================
CREATE OR REPLACE FUNCTION storage.check_upload_mime()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.bucket_id = 'evidencias' THEN
    IF NEW.content_type NOT IN ('image/jpeg', 'image/png') THEN
      RAISE EXCEPTION 'Tipo de archivo no permitido. Solo JPG y PNG.'
        USING HINT = 'allowed_types';
    END IF;
    IF length(NEW.name) > 255 THEN
      RAISE EXCEPTION 'Nombre de archivo demasiado largo.'
        USING HINT = 'filename_too_long';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_check_upload_mime ON storage.objects;
CREATE TRIGGER trg_check_upload_mime
  BEFORE INSERT ON storage.objects
  FOR EACH ROW
  EXECUTE FUNCTION storage.check_upload_mime();

-- ============================================================
-- NOTA: Si el bucket no existe, créalo desde el dashboard:
-- Storage > Create bucket > Name: "evidencias" > Public
-- ============================================================
