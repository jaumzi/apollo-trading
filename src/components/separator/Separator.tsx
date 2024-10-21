import React from "react";

const TYPE_MAPPER = {
  'primary': 'border-text',
  'secondary': 'border-text-contrast'
}

const Separator: React.FC<{ type?: "primary" | "secondary" }> = ({
  type = "primary",
}) => {
  return <div className={"py-2 border-t-2 " + TYPE_MAPPER[type]} />;
};

export default Separator;
