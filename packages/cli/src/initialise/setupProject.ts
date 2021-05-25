import { promises, existsSync } from "fs";
import { CorrespondingAppsType } from "../constants/constantsTypes";
import { join } from "path";

const { writeFile, mkdir } = promises;

const createConfigFile = async (currentApp: CorrespondingAppsType) => {
  const configFile = {
    ...currentApp,
  };
  const fileData = JSON.stringify(configFile, undefined, 2);
  try {
    await mkdir(".frontize");
    await writeFile(".frontize/frontize.config.js", fileData);
  } catch (err) {
    console.log(err);
  }
};

const modifyGitignore = async () => {
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

  await writeFile(".gitignore", gitignoreData, {
    encoding: "utf8",
    flag: "a+",
  });
};

export const setupProject = async (currentApp: CorrespondingAppsType) => {
  await createConfigFile(currentApp);
  await modifyGitignore();
};
