import React from "react";
import { ReactWithProps } from "src/types/react";

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const ApresentationLayout: ReactWithProps = ({ children }) => {
  return (
    <div className="main-height bg-page-bg">
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default ApresentationLayout;
