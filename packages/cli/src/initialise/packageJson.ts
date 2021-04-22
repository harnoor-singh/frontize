import * as fs from "fs";
import path from "path";

const readPackageJson = (dir: string) => {
  try {
    let fileData = fs.readFileSync(path.join(dir, "package.json"), {
      encoding: "utf-8",
    });
    return JSON.parse(fileData);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export { readPackageJson };
