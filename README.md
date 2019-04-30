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
```
ownerToken est le token discord du propriétaire du bot
botID est l'identifiant du bot
**
Ces deux paramètres sont obligatoires**

## License
[MIT](https://choosealicense.com/licenses/mit/)
