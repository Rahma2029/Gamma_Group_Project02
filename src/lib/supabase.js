
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://spcbocsicbrcuctlwwqc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwY2JvY3NpY2JyY3VjdGx3d3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyODQ3NTEsImV4cCI6MjAwODg2MDc1MX0.jK2FAWoHlw6YkDRxuNKWfEeAZYh_OGOjSDkWJqOW2J4'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github'
  }) 

 
 
  