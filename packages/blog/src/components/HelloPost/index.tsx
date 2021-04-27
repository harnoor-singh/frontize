import React from "react";
import { HtmlComponent } from "../HtmlComponent";

export interface HelloPostProps {
  title: string;
  content: string;
}

const HelloPost: React.FC<HelloPostProps> = ({ title, content }) => {
  return (
    <div className="lg:mx-14">
      <h3 className="mb-4 text-4xl lg:text-6xl leading-relaxed">{title}</h3>
      <hr />
      <HtmlComponent {...{ content }} className="py-6" />
    </div>
  );
};

export { HelloPost };
