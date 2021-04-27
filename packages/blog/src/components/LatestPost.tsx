import { Avatar } from "./Avatar";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import { HtmlComponent } from "./HtmlComponent";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

const LatestPost = ({ title, date, excerpt, author, slug }: Props) => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <Avatar slug={author} className="hidden md:flex my-5" />
        </div>
        <div>
          <HtmlComponent
            content={excerpt}
            lineBreaks={false}
            className="leading-relaxed mb-4"
          />
          <Avatar slug={author} className="md:hidden" />
        </div>
      </div>
    </section>
  );
};

export { LatestPost };
