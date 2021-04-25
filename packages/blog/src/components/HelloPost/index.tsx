import React from "react";

export interface HelloPostProps {
  title: string;
  content: string;
}

const HelloPost: React.FC<HelloPostProps> = ({ title, content }) => {
  return (
    <div className="md:mx-14">
      <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">{title}</h3>
      <hr />
      <p className="text-lg leading-relaxed" style={{ whiteSpace: "pre-wrap" }}>
        {content}
      </p>
    </div>
  );
};

export { HelloPost };
