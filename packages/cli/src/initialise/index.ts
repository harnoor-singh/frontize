import * as fs from "fs";
import { detect } from "./detect";

const initialise = () => {
  const currDir = process.cwd();
  const projectType = detect(currDir);
  if (!projectType.supported) {
    console.log(projectType.message);
    process.exit();
  }
};

export { initialise };
