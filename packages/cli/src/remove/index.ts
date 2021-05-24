import { rmdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const updateGitignore = () => {
  const gitignorePath = join(process.cwd(), ".gitignore");
  if (existsSync(gitignorePath)) {
    const currentData = readFileSync(gitignorePath).toString();
    const newData = currentData.replace(
      new RegExp("\n#frontize\n/.frontize\n", "g"),
      ""
    );
    writeFileSync(gitignorePath, newData, {
      encoding: "utf8",
      flag: "w",
    });
  }
};

export const remove = () => {
  rmdirSync(".frontize", {
    recursive: true,
    maxRetries: 5,
  });

  updateGitignore();
};
