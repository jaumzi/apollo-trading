import React from "react";

import Button from "src/components/Button/Button";

import "./HeaderComponent.css";

const HeaderComponent: React.FC = () => {
  return (
    <div className="bg-primary-bg h-full">
      <div className="header-component main-width mx-auto py-5 w-full h-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-2">
        <div>
          <h1 className="">APOLLO</h1>
        </div>
        <div className="btn-container flex flex-row items-center justify-between gap-2 p-1">
          <Button theme="ghost-white" onClick={() => console.log("teste")}>
            Home
          </Button>
          <Button theme="ghost-white" onClick={() => console.log("teste")}>
            Sobre
          </Button>
          <Button theme="ghost-white" onClick={() => console.log("teste")}>
            Produtos
          </Button>
          <Button theme="ghost-white" onClick={() => console.log("teste")}>
            Contatos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
