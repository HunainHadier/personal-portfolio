import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Lazy-initialized Supabase client.
// On Cloudflare Workers / Nitro, process.env binds at REQUEST time — reading
// env vars at module scope yields `undefined`. We therefore defer client
// creation to the first call of `getSupabase()`, which happens inside a
// request handler where process.env is populated.

let _supabase: SupabaseClient | null = null;
let _initialized = false;

function getSupabaseCredentials() {
  const url =
    process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    (typeof import.meta !== "undefined" && import.meta.env
      ? import.meta.env.VITE_SUPABASE_URL
      : undefined);

  const anonKey =
    process.env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    (typeof import.meta !== "undefined" && import.meta.env
      ? import.meta.env.VITE_SUPABASE_ANON_KEY
      : undefined);

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || anonKey;

  return { url, key: serviceKey };
}

/**
 * Returns a lazily-initialised Supabase client.
 * Safe to call from any server handler — env vars are read at call time,
 * not at module-load time.
 */
export function getSupabase(): SupabaseClient | null {
  if (_initialized) return _supabase;

  const { url, key } = getSupabaseCredentials();

  if (url && key) {
    try {
      _supabase = createClient(url, key, {
        auth: {
          persistSession: false, // Server environment, don't persist sessions
        },
      });
      console.log("✅ Supabase client initialized successfully with URL:", url);
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error);
    }
  } else {
    console.warn(
      "⚠️ Supabase env vars are missing. Set SUPABASE_URL and SUPABASE_ANON_KEY (or SUPABASE_SERVICE_ROLE_KEY) to enable the live booking system.",
      { url: !!url, key: !!key }
    );
  }

  _initialized = true;
  return _supabase;
}

// Keep a default export for backward compatibility, but note: this will be
// null at module load time on Cloudflare/Nitro. All callers should migrate
// to getSupabase().
export const supabase: SupabaseClient | null = null;
