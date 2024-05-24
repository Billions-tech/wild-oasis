import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tmkusywndykzddptxswh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRta3VzeXduZHlremRkcHR4c3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MDA1NzMsImV4cCI6MjAzMTE3NjU3M30.y3hxUh2qOpa8f2vV-Hihs4uE8nHJkTGbg_n4oSSKLgM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
