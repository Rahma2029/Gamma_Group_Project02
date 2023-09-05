
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://spcbocsicbrcuctlwwqc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwY2JvY3NpY2JyY3VjdGx3d3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyODQ3NTEsImV4cCI6MjAwODg2MDc1MX0.jK2FAWoHlw6YkDRxuNKWfEeAZYh_OGOjSDkWJqOW2J4'
const supabase = createClient(supabaseUrl, supabaseKey)

//To grab information from the database?
//const { data, error } = await supabase
 // .from('users')
  //.select(`
 //     id, username,
  //`)

  //Third party Oauth with Github(COMMENTED OUT DUE TO VISCODE NOT LIKING BOTH)
  let { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github'
  })

  // Example using axios, but you can use any HTTP library
const axios = require('axios');

const code = 'OAuth code received from GitHub';
const clientId = '43bd4b232664c5ca0764';
const clientSecret = 'ed3d055349efc91cb9565dd00ed3af7a6bebe9e4';

const response = await axios.post('https://github.com/login/oauth/access_token', {
  code,
  client_id: clientId,
  client_secret: clientSecret,
});
const accessToken = response.data.access_token;

 