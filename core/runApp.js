const exec = require('./exec')
const runApp = (packageName) => {
    // ldconsole.exe runapp --index 0 --packagename com.netease.ma84
    return new Promise(resolve => {
        exec(`ldconsole.exe runapp --index ${process.env.mnqIndex} --packagename ${packageName}`).then(() => {
            console.log('runapp over')
            resolve()
        })
    })
}

module.exports = runApp
