import React from "react";

export interface AvatarProps {
  name: string;
  picture: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, picture, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export { Avatar };
