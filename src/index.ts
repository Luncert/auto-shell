
import { IPty, spawn } from "node-pty";

class Execution {

  constructor(private proc: IPty) {
    proc.onData(e => {

    });
  }

  async wait(s: string) {
    return this;
  }

  write(s: string) {

  }
}

export function exec(file: string, ...args: string[]): Execution {
  return new Execution(spawn(file, args, {
    name: file,
    cwd: this.commandContext.pwd,
    env: process.env
  }))
}

async function t() {

  const e = exec('node');
  e.wait(`Welcome to Node.js v16.14.0.
Type ".help" for more information.
> `).then(() => e.write('var a = 1;\n'))
}

