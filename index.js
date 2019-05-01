module.exports = function(ownerToken, id, debug = false){
  try{
    if(ownerToken === null || id === null){
        console.error("Missing parameters")
        return
    }
const request = require('sync-request');
var res = request('POST', 'https://discordapp.com/api/oauth2/applications/' + id + '/bot/reset', {headers: {'Authorization': ownerToken}});
var body = JSON.parse(res.getBody().toString())
  return body.token
} catch(err){
  console.log("Le serveur a répondu : " + err.statusCode)
}
}
