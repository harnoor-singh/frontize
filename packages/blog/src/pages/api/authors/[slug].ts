import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const projectRoot = serverRuntimeConfig.PROJECT_ROOT;

const authorsDirectory = join(projectRoot, "_authors");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const fullPath = join(authorsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  res.status(200).json(data);
}
