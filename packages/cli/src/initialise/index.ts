import * as fs from "fs";
import { correspondingApps } from "../constants/correspondingApps";
import { detect } from "./detect";

const initialise = () => {
  const currDir = process.cwd();
  const projectType = detect(currDir);
  if (!projectType.supported) {
    console.log(projectType.message);
    process.exit();
  }

  const currentApp = correspondingApps[projectType.appType];
  console.log(currentApp);
};

export { initialise };
