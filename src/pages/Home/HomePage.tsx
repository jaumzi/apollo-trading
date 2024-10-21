import React from "react";
import { Link } from "react-router-dom";

import ApresentationLayout from "src/layouts/ApresentationLayout/ApresentationLayout";
import Separator from "src/components/separator/Separator";

import LogoApolloVerde from "src/assets/images/logo_apollo_verde.png";
import whatsapp_logo from "src/assets/images/whatsapp_logo.png";
import instagram_logo from "src/assets/images/instagram_logo.png";
import youtube_logo from "src/assets/images/youtube_logo.png";
import discord_logo from "src/assets/images/discord_logo.png";

import "./HomePage.css";

const Home = () => {
  return (
    <ApresentationLayout>
      <div className="home-page h-full w-full">
        <div className="main-width mx-auto home-first-page-container h-full mt-10 md:mt-0 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="info-container flex flex-col gap-4">
            <div className="title-container">
              <h1 className="text-3xl">
                Seja bem-vindo à Apollo, a sua escolha confiável para{" "}
                <span className="text-text-contrast bg-primary w-fit px-1">
                  consultoria e investimentos.
                </span>
              </h1>
            </div>
          </div>
          <img className="logo" src={LogoApolloVerde} alt="Logo Apollo" />
        </div>

        <div className="main-width mx-auto">
          <Separator />
        </div>

        <div className="w-full bg-primary-bg">
          <div className="main-width mx-auto main-height mb-8 flex flex-col justify-between">
            <div className="paragraph-container flex flex-col gap-5 mt-10 mb-10">
              <h2 className="text-text-contrast">Quem é o Grupo Apollo?</h2>
              <h3 className="text-lg text-text-contrast">
                Na Apollo, acreditamos que investir é mais do que apenas
                números, é sobre pessoas, sonhos e o futuro que cada um deseja
                construir. Com mais de 10 anos de experiência no mercado
                financeiro (Cripto, B3 e Forex), nossa missão é guiar você em
                cada etapa dessa jornada rumo à liberdade financeira.
              </h3>
              <h3 className="text-lg text-text-contrast">
                Oferecemos consultoria personalizada, com foco nas suas
                necessidades e objetivos. Valorizamos a transparência e a
                proximidade, porque entendemos que confiança é a base de
                qualquer relacionamento de sucesso.
              </h3>
              <h3 className="text-lg text-text-contrast">
                Nosso compromisso é entregar soluções seguras e rentáveis,
                sempre com integridade, inovação e excelência. Queremos ser o
                seu parceiro de confiança para transformar seus investimentos em
                conquistas reais e duradouras.
              </h3>

              <Link
                className="text-primary font-bold underline leading-normal text-sm mt-4"
                to={
                  "https://wa.me/553299779117?text=Olá%2C%20tudo%20bem%3F%20Vi%20o%20site%20e%20desejo%20saber%20mais%20sobre%20seus%20serviços"
                }
                target="_blank"
              >
                <h3>Clique aqui para falar com um consultor!</h3>
              </Link>
            </div>

            <Separator type="secondary" />
          </div>
        </div>

        <div className="main-width mx-auto paragraph-container mt-8 mb-12 flex flex-col gap-5">
          <h2>Fale conosco</h2>
          <span className="text-sm md:text-base">
            Entre em contato por meio do telefone:{" "}
            <b>(32) 9 9977-9117</b> ou do email:{" "}
            <b>apollotradinginvestimentos@gmail.com</b>
          </span>

          <div className="mt-4 w-fit grid grid-cols-4 gap-2">
            <Link
              to={
                "https://wa.me/553299779117?text=Olá%2C%20tudo%20bem%3F%20Vi%20o%20site%20e%20desejo%20saber%20mais%20sobre%20seus%20serviços"
              }
              target="_blank"
            >
              <div className="bg-text min-w-10 min-h-10 max-w-10 max-h-10 flex items-center justify-center rounded-lg">
                <img
                  className="min-w-4 min-h-4 max-w-7 max-h-7 object-contain"
                  src={whatsapp_logo}
                  alt="WhatsApp Logo"
                />
              </div>
            </Link>
            <Link
              to={"https://www.instagram.com/apollotradingoficial/"}
              target="_blank"
            >
              <div className="bg-text min-w-10 min-h-10 max-w-10 max-h-10 flex items-center justify-center rounded-lg">
                <img
                  className="min-w-4 min-h-4 max-w-7 max-h-7 object-contain"
                  src={instagram_logo}
                  alt="Instagram Logo"
                />
              </div>
            </Link>
            <Link
              to={"https://www.youtube.com/@otraderdeblazer"}
              target="_blank"
            >
              <div className="bg-text min-w-10 min-h-10 max-w-10 max-h-10 flex items-center justify-center rounded-lg">
                <img
                  className="min-w-4 min-h-4 max-w-7 max-h-7 object-contain"
                  src={youtube_logo}
                  alt="Youtube Logo"
                />
              </div>
            </Link>
            <Link to={"https://discord.com/invite/yaBPAn4hH4"} target="_blank">
              <div className="bg-text min-w-10 min-h-10 max-w-10 max-h-10 flex items-center justify-center rounded-lg">
                <img
                  className="min-w-4 min-h-4 max-w-7 max-h-7 object-contain"
                  src={discord_logo}
                  alt="Discord Logo"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ApresentationLayout>
  );
};

export default Home;
