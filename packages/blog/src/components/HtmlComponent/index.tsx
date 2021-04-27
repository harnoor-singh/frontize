import React, { useEffect } from "react";
import { useRemark } from "react-remark";

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
  const [mdContent, setMDContent] = useRemark();

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
