import React from "react";

import footer_img from "src/assets/images/footer_img.webp";
import logo_apollo_img from "src/assets/images/logo_apollo.png";

import "./FooterComponent.css";

const FooterComponent: React.FC = () => {
  return (
    <>
      <div className="footer-container w-full h-full relative min-w-full flex items-center justify-center">
        <h4 className="absolute text-text-contrast m-6">
          Sem sabedoria, o ouro pode ser rapidamente perdido por aqueles que o
          possuem, mas, com sabedoria, o ouro pode ser garantido por aqueles que
          não o têm!
        </h4>
        <img
          className="min-w-full max-h-96 object-cover"
          src={footer_img}
          alt="Footer"
        />
      </div>
      <div className="w-full bg-primary-bg">
        <div className="main-width flex items-center justify-between">
          <div>
            <img className="max-h-48 max-w-48" src={logo_apollo_img} alt="Logo Apollo" />
          </div>
          <div className="flex flex-col text-text-contrast gap-4 text-xs md:text-sm">
            <span className="font-bold">
              APOLLO TRADING & INVESTIMENTOS LTDA - 54.575.464/0001-55
            </span>
            <span>
              APOLLO INVESTIMENTOS © {new Date().getFullYear()} Todos os
              direitos Reservados.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
