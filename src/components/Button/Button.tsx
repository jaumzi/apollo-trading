import React from "react";
import { ReactWithProps } from "src/types/react";

import "./Button.css";

type ButtonThemes =
  | "primary"
  | "secondary"
  | "outlined"
  | "ghost"
  | "ghost-white";

const Button: ReactWithProps<{
  onClick: Function;
  className?: string;
  theme?: ButtonThemes;
}> = ({ onClick, children, theme = "primary", className }) => {
  const isGhostButton = (theme: ButtonThemes) => {
    switch (theme) {
      case "ghost":
        return true;
      case "ghost-white":
        return true;
      default:
        return false;
    }
  };

  return (
    <button
      className={
        (isGhostButton(theme) ? "button-ghost " : "button ") +
        theme +
        " " +
        className
      }
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
