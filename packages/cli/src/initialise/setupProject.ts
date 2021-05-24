import { mkdirSync, writeFileSync, existsSync } from "fs";
import { CorrespondingAppsType } from "../constants/constantsTypes";
import { join } from "path";

const createConfigFile = (currentApp: CorrespondingAppsType) => {
  const configFile = {
    ...currentApp,
  };
  const fileData = JSON.stringify(configFile, undefined, 2);
  try {
    mkdirSync(".frontize");
    writeFileSync(".frontize/frontize.config.js", fileData);
  } catch (err) {
    console.log(err);
  }
};

const modifyGitignore = () => {
  const checkIfGit: (start?: string) => boolean = (start = process.cwd()) => {
    if (existsSync(start)) {
      let gitPath = join(start, ".git");
      if (existsSync(gitPath)) {
        return true;
      } else {
        let nextStart = join(start, "..");
        return checkIfGit(nextStart);
      }
    }

    return false;
  };

  if (!checkIfGit()) {
    return;
  }

  const gitignoreData = "\n#frontize\n/.frontize\n";

  writeFileSync(".gitignore", gitignoreData, {
    encoding: "utf8",
    flag: "a+",
  });
};

export const setupProject = (currentApp: CorrespondingAppsType) => {
  createConfigFile(currentApp);
  modifyGitignore();
};
