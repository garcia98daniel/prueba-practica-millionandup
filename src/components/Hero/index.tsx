import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './styles.module.css';

function Hero() {
    return (
        <header className={styles.header}>
            <div className={styles.header_title_container}>
                <h1>La próxima revolución en el intercambio de criptomonedas</h1>
                <p>Cripto Million te ayuda a navegar entre los diferentes precios y tendencias</p>
                <a href="#currencies" className={styles.header_button}>
                Ver criptomonedas <Icon name='arrow down'/>
                </a>
            </div>
        </header>
    );
}

export default Hero;