import * as fs from "fs";
import { readPackageJson } from "./packageJson";

const detect = (dir: string) => {
  const { dependencies } = readPackageJson(dir);
  return dependencies;
};

export { detect };
