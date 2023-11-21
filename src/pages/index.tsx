// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from 'next/router';

//components
import Nav from "../components/Nav/index";
import Hero from "../components/Hero/index";
import CurrenciesSection from "../components/CurrenciesSection/index";

import { useTranslation } from "react-i18next";

//semantic ui components
import { Input, Button } from "semantic-ui-react";
// import { motion } from "framer-motion";

//styles
import styles from "./styles.module.css";
import Footer from "../components/Footer/index";


function Home() {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <Nav />
      <Hero/>
      <main className={styles.main}>
          <CurrenciesSection /> 

          <section className={styles.bitcoin_img_container}>
            <h2>{t("subscribe_section_txt_1")}</h2>
            <p>{t("subscribe_section_txt_2")}</p>
            <Input fluid placeholder={t("subscribe_input_txt")} />
            <br />
            <Button fluid color='black' >{t("subscribe_section_btn_txt")}</Button>
          </section>
      </main>
    <Footer/>
    </>
  );
}

export default Home;