
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://spcbocsicbrcuctlwwqc.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

//To grab information from the database?
const { data, error } = await supabase
  .from('users')
  .select(`
      id, username,
  `)

  //Third party Oauth with Github(COMMENTED OUT DUE TO VISCODE NOT LIKING BOTH)
  //let { data, error } = await supabase.auth.signInWithOAuth({
  //provider: 'github'
  //})

 