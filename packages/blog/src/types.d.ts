export type useStateCallbackHookType = <T extends unknown>(
  initialValue: T
) => [T, (args: T, callback?: Function) => void];

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: string;
  excerpt: string;
  content: string;
};
