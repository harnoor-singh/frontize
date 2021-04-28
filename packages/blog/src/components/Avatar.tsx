import React, { useEffect, useState } from "react";
import authors from "../../_data/authors.json";

export interface AvatarProps {
  slug: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ slug, className }) => {
  const [details, setDetails] = useState({ name: slug, picture: "" });

  useEffect(() => {
    const authorData = (authors as any)[slug];
    setDetails({
      name: authorData.name,
      picture: authorData.picture,
    });
  }, []);

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={details.picture}
        className="w-12 h-12 rounded-full mr-4"
        alt={details.name}
      />
      <div className="text-xl font-bold">{details.name}</div>
    </div>
  );
};

export { Avatar };
