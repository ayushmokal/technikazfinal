import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://iovmjhrcmveftdokffrf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlvdm1qaHJjbXZlZnRkb2tmZnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3OTIzMzMsImV4cCI6MjA1MDM2ODMzM30.CSwFapyih5AroslJ6VVNBpOU1MT4MAKTX9cuDPLPsjY";

export const supabase = createClient<Database>(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    global: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  }
);