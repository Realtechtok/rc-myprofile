import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lpockbxmuwrpsdveklus.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwb2NrYnhtdXdycHNkdmVrbHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyOTEyMzgsImV4cCI6MjEwNDg2NzIzOH0.PxwxhFlH7oQTLIlqmyrIXHER6xggXc_P06PAa9wAKeI'

export const supabase = createClient(supabaseUrl, supabaseKey)