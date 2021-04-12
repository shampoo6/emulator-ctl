const config = require('./config')

for (let key in config) {
    process.env[key] = config[key]
}

require(`./script/${process.env.scriptName}`)
