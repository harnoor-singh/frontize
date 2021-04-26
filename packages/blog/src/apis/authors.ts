import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const authorsDirectory = join(process.cwd(), "_authors");

export const getAuthorBySlug = (slug: string) => {
  const fullPath = join(authorsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return data;
};
