const fetch = require('node-fetch')
let xapp_token = ""
fetchAndCacheToken()

function fetchAndCacheToken(){
fetch('https://api.artsy.net/api/tokens/xapp_token?client_id=83b52175d463d48945d1&client_secret=4a43c2ad60ff8d57d42b67e24e450c8d',{
  method: 'POST',
  headers: {
    'content-type': 'application-json'
  }
})
.then(res=>res.json())
.then(res => {
  xapp_token = res.token
  console.log(xapp_token)
  var expiresAt = new Date(res.expires_in).getTime();
  setTimeout(() => fetchAndCacheToken(), (expiresAt - 1000) - Date.now())
})
}