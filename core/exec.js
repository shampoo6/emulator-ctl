const {spawn} = require('child_process')

class Executor {
    executor

    constructor() {
        this.executor = spawn(`cmd`)
        this.executor.stdin.setEncoding('utf-8')
        // 将输出内容显示到主进程控制台
        // this.executor.stdout.pipe(process.stdout)
        // 切换工作空间
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
