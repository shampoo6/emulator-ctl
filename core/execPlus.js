const {spawn} = require('child_process')

class Executor {
    executor

    constructor() {
        this.executor = spawn(`cmd`)
        this.executor.stdin.setEncoding('utf-8')
        this.executor.stdout.pipe(process.stdout)
        this.executor.stdin.write(`cd ${process.env.workspace}\n`)
    }

    exec(cmd) {
        this.executor.stdin.write(`${cmd}\n`)
    }
}

Executor.getInstance = () => {
    if (!Executor.instance) {
        Executor.instance = new Executor()
        Executor.instance.exec = Executor.instance.exec.bind(Executor.instance)
    }
    return Executor.instance
}

module.exports = Executor.getInstance()

// child.stdin.write(`ld -s 0\n`)
// child.stdin.write(`input tap 0 0\n`)
