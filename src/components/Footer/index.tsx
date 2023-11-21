import React from 'react';
import styles from "./styles.module.css";
import Image from '../../../node_modules/next/image';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation("global");

    return (
        <footer className={styles.footer}>
            <section className={styles.left}>
                <ul>
                <li><a href="">Daniel Garcia | Profesional Dev</a></li>
                <li><a href="https://www.linkedin.com/in/daniel-antonio-garcia-arias-5661141b3/">Mi Linkedin</a></li>
                <li><a href="https://github.com/garcia98daniel">Mi Git hub</a></li>
                </ul>
            </section>
            <section className={styles.right}>
                <Image src="/images/logo.svg" alt="Logo de Million and up 2023" layout="fill" objectFit="contain"/>
            </section>
        </footer>
    );
}

export default Footer;