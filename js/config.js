const SUPABASE_URL = "https://aapjrtvhjdxrkofioayj.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_22Nadm7464t_duOyHqiaYA_rQ0YcFXw";

// IMPORTANT
window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
