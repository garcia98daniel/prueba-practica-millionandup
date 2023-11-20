import React from 'react';
import styles from './styles.module.css';
import CurrenciesTable from '../CurrenciesTable/index';

function CurrenciesSection() {
    return (
    <section className={styles.main_exchange_container}>
            <div className={styles.backgroundImg}></div>
            <div className={styles.main_exchange_container_title}>
            <h2>Visibilizamos todas las tazas de cambio.</h2>
            <p>Traemos la información en tiempo real de las casas de cambio más importantes del mundo</p>
            </div>
            <div className={styles.currenciesTable_wrapper} id="currencies">
              <CurrenciesTable/>
            </div>
      </section>
    );
}

export default CurrenciesSection;