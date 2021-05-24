import { mkdirSync, writeFileSync } from "fs";
import { CorrespondingAppsType } from "../constants/constantsTypes";

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
