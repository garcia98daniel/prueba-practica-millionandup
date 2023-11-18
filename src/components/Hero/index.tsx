import React from 'react';
import styles from './styles.module.css';
import { Icon } from 'semantic-ui-react';

function Hero() {
    return (
        <header className={styles.header}>
            <div className={styles.header_title_container}>
                <h1>La próxima revolución en el intercambio de criptomonedas</h1>
                <p>Cripto Million te ayuda a navegar entre los diferentes precios y tendencias</p>
                <a href="#aboutAs" className={styles.header_button}>
                Conoce Más <Icon name='arrow down'/>
                </a>
            </div>
        </header>
    );
}

export default Hero;