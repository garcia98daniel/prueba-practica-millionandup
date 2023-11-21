import React from 'react';
import styles from './styles.module.css';
import CurrenciesTable from '../CurrenciesTable/index';
import { useTranslation } from 'react-i18next';

function CurrenciesSection() {
  const { t, i18n } = useTranslation("global");

    return (
    <section className={styles.main_exchange_container}>
            <div className={styles.backgroundImg}></div>
            <div className={styles.main_exchange_container_title}>
            <h2>{t("currencies_section_txt_1")}</h2>
            <p>{t("currencies_section_txt_2")}</p>
            </div>
            <div className={styles.currenciesTable_wrapper} id="currencies">
              <CurrenciesTable/>
            </div>
      </section>
    );
}

export default CurrenciesSection;