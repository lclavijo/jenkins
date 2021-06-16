'use strict';

const readline = require('readline');
const fs = require('fs');
const readInterface = readline.createInterface({
    input: fs.createReadStream('jwt-token-SANTANDER-DEV.txt'),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    let newToken = line;
    console.log(newToken);

    let rawdata = fs.readFileSync('postman\\Development.postman_environment.json');
    let env = JSON.parse(rawdata);
    let token = env.values.find(item => item.key === "token");
    token.value = newToken;

    let data = JSON.stringify(env);
    fs.writeFileSync('dev-env.json', data);
});
