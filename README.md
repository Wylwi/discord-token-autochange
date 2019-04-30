# Discord token autochange
Discord token autochange est un module NodeJS destiné à prévenir le vol de token en automatisant le changement de celui-ci

## Installation

Utilisez NPM pour installer discord-token-autochange

```bash
npm --install --save discord-token-autochange
```

## Utilisation

```nodejs
var changeToken = require("discord-token-autochange")
var token = changeToken(ownerToken, botID)

client.destroy()
client.login(token)
```
ownerToken est le token discord du propriétaire du bot

botID est l'identifiant du bot

**Ces deux paramètres sont obligatoires**

### Examples

```nodejs
var changeToken = require("discord-token-autochange")*
var cron = require('node-cron');
 
cron.schedule('*/2 * * * *', () => {
  //Crée une tache qui s'execute toutes les 2 minutes
var token = changeToken(ownerToken, botID)

client.destroy()
client.login(token)
})
``` 

## License
[MIT](https://choosealicense.com/licenses/mit/)
