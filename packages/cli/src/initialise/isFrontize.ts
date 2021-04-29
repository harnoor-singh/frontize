import { existsSync } from "fs";
import { join } from "path";

// To test if a directory is alrady initialised.
// To be implemented.
export const isFrontize = (dir: string) => {
  if (existsSync(join(dir, ".frontize", "config.json"))) {
    return true;
  }
  return false;
};
