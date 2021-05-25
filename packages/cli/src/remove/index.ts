import { promises, existsSync } from "fs";
import { join } from "path";

const { readFile, rmdir, writeFile } = promises;

const updateGitignore = async () => {
  const gitignorePath = join(process.cwd(), ".gitignore");
  if (existsSync(gitignorePath)) {
    const currentData = (await readFile(gitignorePath)).toString();
    const newData = currentData.replace(
      new RegExp("\n#frontize\n/.frontize\n", "g"),
      ""
    );
    await writeFile(gitignorePath, newData, {
      encoding: "utf8",
      flag: "w",
    });
  }
};

export const remove = async () => {
  await rmdir(".frontize", {
    recursive: true,
    maxRetries: 5,
  });

  await updateGitignore();
};
