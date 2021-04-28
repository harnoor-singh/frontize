import React from "react";

interface HeadingProps {
  id: string;
  children: React.ReactNode;
}

export const Heading = ({ id, children }: HeadingProps) => {
  return (
    <a href={`#${id}`}>
      <h1
        {...{ id, children }}
        className="text-3xl font-bold hover:underline"
      />
    </a>
  );
};

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const CustomLink = (props: LinkProps) => {
  return <a {...props} className="text-blue-600 hover:underline font-medium" />;
};

export const Paragraph: React.FC = ({ children }) => {
  return <p className="font-sans">{children}</p>;
};

interface ListProps {
  children: any[];
}

export const List = ({ children }: ListProps) => {
  return (
    <ul className="list-disc ml-12">
      {children.filter((child) => child !== "\n")}
    </ul>
  );
};
