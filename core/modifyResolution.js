const exec = require('./exec')

const modifyResolution = () => {
    const config = process.env
    return new Promise(resolve => {
        exec(`ldconsole.exe modify --index ${config.mnqIndex} --resolution ${config.w},${config.h},${config.dpi}`).then(() => {
            console.log('modify resolution over')
            resolve()
        })
    })
}

module.exports = modifyResolution
