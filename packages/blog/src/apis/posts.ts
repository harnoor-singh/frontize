import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { getCoverFromSlug } from "./post_cover";

const postsDirectory = join(process.cwd(), "_data/posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((slug) => slug !== "hello-world.md");
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "coverImage") {
      items[field] = getCoverFromSlug(realSlug);
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export const getHelloPost = () => {
  const postData = getPostBySlug("hello-world", ["title", "content"]);
  return postData;
};
