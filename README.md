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
<aside class="panel panel-warning">
ownerToken est le token discord du propriétaire du bot
botID est l'identifiant du bot
</aside>
<aside class="warning">
Ces deux paramètres sont obligatoires
</aside>

## License
[MIT](https://choosealicense.com/licenses/mit/)
