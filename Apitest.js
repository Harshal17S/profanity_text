// this example uses axios and form-data
const axios = require('axios');
const FormData = require('form-data');

data = new FormData();
data.append('text', 'Contact rick(at)gmail(dot)com to have s_*_x');
data.append('lang', 'en');
data.append('opt_countries', 'us,gb,fr');
data.append('mode', 'rules');
data.append('api_user', '1098457723');
data.append('api_secret', 'w8bxAm5xLKk9sRr5exopFAp4bPe7rjjj');

axios({
  url: 'https://api.sightengine.com/1.0/text/check.json',
  method:'post',
  data: data,
  headers: data.getHeaders()
})
.then(function (response) {
  // on success: handle response
  console.log(response.data.profanity);
})
.catch(function (error) {
  // handle error
  if (error.response) console.log(error.response.data);
  else console.log(error.message);
});