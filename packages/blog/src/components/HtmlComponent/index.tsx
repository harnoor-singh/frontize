import React, { useEffect } from "react";
import { useRemark } from "react-remark";
import rehypeSlug from "rehype-slug";
import styles from "./html.module.css";

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
        h1: (props: any) => (
          <a href={`#${props.id}`}>
            <h1 className={styles.heading} {...props} />
          </a>
        ),
        p: (props: any) => <p className={styles.paragraph} {...props} />,
        a: (props: any) => <a className={styles.link} {...props} />,
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
