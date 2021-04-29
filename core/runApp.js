const {exec} = require('./execPlus')
const runApp = (packageName) => {
    // ldconsole.exe runapp --index 0 --packagename com.netease.ma84
    exec(`ldconsole.exe runapp --index ${process.env.mnqIndex} --packagename ${packageName}`)
    console.log('runapp over')
}

module.exports = runApp
