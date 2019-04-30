module.exports = function(token, id, debug = false){
    if(token === null || id === null){
        console.error("Missing parameters")
        return
    }
const request = require('request');
request.get({
    url: 'https://discordapp.com/api/oauth2/applications/' + id + '/bot/reset',
    headers: {
      'Authorization': token
    }
  }).on('response', function(response) {
    if(debug) console.log(response.bot.token)
    token = response.bot.token
  })
  return token
}