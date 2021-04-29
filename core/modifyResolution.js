const {exec} = require('./execPlus')

const modifyResolution = () => {
    const config = process.env
    exec(`ldconsole.exe modify --index ${config.mnqIndex} --resolution ${config.w},${config.h},${config.dpi}`)
    console.log('modify resolution over')
}

module.exports = modifyResolution
