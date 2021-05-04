import { Avatar } from "./Avatar";
import DateFormatter from "./date-formatter";
import { CoverImage } from "./CoverImage";
import Link from "next/link";
import { HtmlComponent } from "./HtmlComponent";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <HtmlComponent
        content={excerpt}
        lineBreaks={false}
        className="leading-relaxed mb-4"
      />
      <Avatar slug={author} />
    </div>
  );
};

export default PostPreview;
