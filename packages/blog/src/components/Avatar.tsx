import React, { useEffect, useState } from "react";

export interface AvatarProps {
  slug: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ slug, className }) => {
  const [details, setDetails] = useState({ name: "", picture: "" });

  useEffect(() => {
    fetch(`/api/authors/${slug}`)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
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
