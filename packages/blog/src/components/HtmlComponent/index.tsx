import React, { useEffect } from "react";
import { useRemark } from "react-remark";
import rehypeSlug from "rehype-slug";
import { Heading, CustomLink, List, Paragraph } from "./customHTML";

export interface HtmlComponentProps {
  content: string;
  className?: string;
  lineBreaks?: boolean;
}

const HtmlComponent: React.FC<HtmlComponentProps> = ({
  content,
  className,
  lineBreaks = true,
}) => {
  const [mdContent, setMDContent] = useRemark({
    rehypePlugins: [rehypeSlug],
    rehypeReactOptions: {
      components: {
        // @ts-ignore
        h1: Heading,
        // @ts-ignore
        p: Paragraph,
        // @ts-ignore
        ul: List,
        // @ts-ignore
        a: CustomLink,
      },
    },
  });

  useEffect(() => {
    setMDContent(content);
  }, []);

  return (
    <div
      className={"text-lg leading-snug " + className}
      style={{ whiteSpace: lineBreaks ? "pre-wrap" : "normal" }}
    >
      {mdContent}
    </div>
  );
};

export { HtmlComponent };
