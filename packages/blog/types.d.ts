export type useStateCallbackHookType = <T extends unknown>(
  initialValue: T
) => [T, (args: T, callback?: Function) => void];

export type Author = {
  name: string;
  picture: string;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};
