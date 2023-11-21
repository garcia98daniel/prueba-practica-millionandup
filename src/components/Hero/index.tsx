import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t, i18n } = useTranslation("global");
    
    return (
        <header className={styles.header}>
            <div className={styles.header_title_container}>
                <h1>{t("hero_txt_1")}</h1>
                <p>{t("hero_txt_2")}</p>
                <a href="#currencies" className={styles.header_button}>
                {t("hero_txt_3")}<Icon name='arrow down'/>
                </a>
            </div>
        </header>
    );
}

export default Hero;