import AsyncStorage from "@react-native-async-storage/async-storage";

import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PROJECT_URL, SUPABASE_PUBLISHABLE_KEY } from "@env";
const supabaseUrl = "https://tpdoctrlqjehyzohtmwv.supabase.co";
const supabasePublishableKey = "sb_publishable_2vYH4w-Ok4p8c2Md44OxiQ_Di4Kcpkf";

// const supabaseUrl = SUPABASE_PROJECT_URL;
// const supabasePublishableKey = SUPABASE_PUBLISHABLE_KEY;
export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
