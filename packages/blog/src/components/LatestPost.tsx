import { Avatar } from "./Avatar";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import { HtmlComponent } from "./HtmlComponent";
import { classnameFromList } from "../lib/classnameFromList";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

const LatestPost = ({ title, date, excerpt, author, slug }: Props) => {
  return (
    <div
      className={classnameFromList([
        "md:grid md:grid-cols-2",
        "md:gap-x-16 lg:gap-x-20",
        "mb-10 md:mb-16",
        "lg:mx-12",
      ])}
    >
      <div
        className={classnameFromList([
          "md:flex md:flex-col",
          "md:items-end md:justify-center",
          "text-center",
        ])}
      >
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <Avatar slug={author} className="hidden md:flex my-2" />
      </div>
      <div className="flex flex-col justify-center">
        <HtmlComponent content={excerpt} className="leading-relaxed mb-4" />
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline text-blue-600">Read full</a>
        </Link>
        <Avatar slug={author} className="md:hidden my-2" />
      </div>
    </div>
  );
};

export { LatestPost };
