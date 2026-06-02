

const SUPABASE_URL = "https://gqoluveplropeqbxzjxl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxb2x1dmVwbHJvcGVxYnh6anhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MjkyMzIsImV4cCI6MjA5NjAwNTIzMn0.6Wm99nPXU9tKemhqPvhPgAkla-5motfCSsClDbmhUVk";

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
