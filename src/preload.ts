import fs from "fs"

(window as any).createWriteStream = (path: string) => {
  console.log(`createWriteStream - path:[${path}]`);
  return fs.createWriteStream(path);
}
