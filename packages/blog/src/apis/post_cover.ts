import { existsSync } from "fs";
import { join } from "path";

const coversPath = "/assets/post_covers";
const fullCoversPath = join(process.cwd(), "public", coversPath);

export const getCoverFromSlug = (slug: string) => {
  const possibleExtenstions = ["jpg", "png"];
  let resPath = "alt.jpg";

  possibleExtenstions.some((extension) => {
    let fName = `${slug}.${extension}`;
    let currPath = join(fullCoversPath, fName);
    if (existsSync(currPath)) {
      resPath = fName;
      return true;
    }
  });

  return join(coversPath, resPath);
};
