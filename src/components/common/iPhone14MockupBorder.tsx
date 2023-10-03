import React from "react";

interface IPhone14MockupBorderProps {
  children: React.ReactNode;
}

const IPhone14MockupBorder: React.FC<IPhone14MockupBorderProps> = ({
  children,
}) => {
  return (
    <div className="iphone-14-mockup-border">
      <img
        src="../config.png"
        alt="iPhone 14 Mockup Border"
        className="iphone-14-mockup-image"
      />
      <div className="iphone-14-mockup-content">{children}</div>
    </div>
  );
};

export default IPhone14MockupBorder;
