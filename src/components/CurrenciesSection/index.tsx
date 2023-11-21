import React, { useState, ChangeEvent } from 'react';
import styles from './styles.module.css';
import CurrenciesTable from '../CurrenciesTable/index';
import { useTranslation } from 'react-i18next';
import { Input } from 'semantic-ui-react';

function CurrenciesSection() {
  const { t, i18n } = useTranslation("global");

  const [filterText, setFilterText] = useState<string>(""); // State to store the filter text

  // this function handle the input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, { value }: { value: string }) => {
    setFilterText(value);
  };

  return (
    <section className={styles.main_exchange_container}>  
      <div className={styles.backgroundImg}></div>
      <div className={styles.main_exchange_container_title}>
        <h2>{t("currencies_section_txt_1")}</h2>
        <p>{t("currencies_section_txt_2")}</p>
      </div>
      <Input
        size="large"
        icon="search"
        placeholder={t("currenciesTable_search_currency_input")}
        value={filterText}
        onChange={handleInputChange}
      />
      <div className={styles.currenciesTable_wrapper} id="currencies">
        <CurrenciesTable filterText={filterText}/>
      </div>
    </section>
  );
}

export default CurrenciesSection;
