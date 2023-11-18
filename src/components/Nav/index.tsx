import React from 'react';
import styles from './styles.module.css';
import Image from "next/image";

function Nav() {
    return (
        <div className={styles.nav_container}>

            <div className={styles.nav_img_container}>
                <Image src="/images/logo.svg" layout="fill" objectFit="contain" />
            </div>
                <h3>Principales 50 Criptomonedas por capitalización de mercado</h3>
            
        </div>
    );
}

export default Nav;