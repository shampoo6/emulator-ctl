const {exec} = require('child_process')
const _exec = (cmd) => {
    return new Promise(resolve => {
        runCmd(cmd, resolve)
    })

    function runCmd(cmd, resolve) {
        let hasError = false
        // const bat = exec(`chcp 65001 && ${cmd}`, {cwd: process.env.workspace})
        const bat = exec(cmd, {
            cwd: process.env.workspace,
            timeout: 5000,
            maxBuffer: 1024 * 1024 * 100 // 100M缓存
        })
        bat.stdout.on('data', (data) => {
            console.log(data.toString())
        })
        bat.stderr.on('data', (data) => {
            console.log('error')
            console.error(data.toString())

            // 异常后重试
            hasError = true
            // 5s后重试
            console.log('5s后重试')
            setTimeout(() => {
                bat.kill()
                runCmd(cmd, resolve)
            }, 5000)
        })

        bat.on('exit', (code) => {
            if (!hasError)
                resolve()
        })
    }
}

module.exports = _exec
