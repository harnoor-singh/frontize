import { correspondingApps } from "../constants/correspondingApps";
import { setupProject } from "./setupProject";
import { detect } from "./detect";
import { installApps } from "./installApps";

const initialise = () => {
  const currDir = process.cwd();
  const projectType = detect(currDir);
  if (!projectType.supported) {
    console.log(projectType.message);
    process.exit();
  }

  const currentApp = correspondingApps[projectType.appType];
  installApps();
  setupProject(currentApp);
};

export { initialise };
