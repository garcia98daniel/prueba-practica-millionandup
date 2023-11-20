// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from 'next/router';

//components
import Nav from "../components/Nav/index";
import Hero from "../components/Hero/index";
import CurrenciesSection from "../components/CurrenciesSection/index";

//semantic ui components
import { Input, Button } from "semantic-ui-react";
// import { motion } from "framer-motion";

//styles
import styles from "./styles.module.css";
import Footer from "../components/Footer/index";


function index() {
  return (
    <>
      <Nav />
      <Hero/>
      <main className={styles.main}>
          <CurrenciesSection />

          <section className={styles.bitcoin_img_container}>
            <h2>Manténgase al tanto de las criptomonedas. Todo el tiempo, en cualquier momento.</h2>
            <p>Por favor, mantenme informado por correo electrónico sobre las últimas noticias relacionadas con criptomonedas, resultados de investigaciones, programas de recompensas, actualizaciones de eventos, listados de monedas y cualquier otra información relevante de CoinMarketCap.</p>
            <Input fluid placeholder='Ingresa tu dirección de correo electronico' />
            <br />
            <Button fluid color='black' >Suscribirse</Button>
          </section>
      </main>
    <Footer/>
    </>
  );
}

export default index;