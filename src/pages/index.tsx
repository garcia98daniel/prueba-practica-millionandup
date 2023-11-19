// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from 'next/router';

//components
import Nav from "../components/Nav/index";
import Hero from "../components/Hero/index";
import CurrenciesSection from "../components/CurrenciesSection/index";

//semantic ui components
// import { Button, Icon, Transition} from "semantic-ui-react";
// import { motion } from "framer-motion";

//styles
import styles from "./styles.module.css";
import Footer from "../components/Footer/index";

//redux
// import { useDispatch, useSelector } from 'react-redux';
//actions
// import {currencyRequesting} from "../redux/currency/actions";
function index() {
  return (
    <div>
      <Nav />
      <Hero/>
      <main className={styles.main}>
          <CurrenciesSection />
      </main>

    <Footer/>
    </div>
  );
}

export default index;