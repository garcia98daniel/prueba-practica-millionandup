import React from 'react';
import styles from './styles.module.css';
import Link from '../../../node_modules/next/link';
import Image from '../../../node_modules/next/image';

import { Select } from 'semantic-ui-react'

const languages = [
  { key: 'es', value: 'es', text: 'Español' },
  { key: 'en', value: 'ax', text: 'Ingles' },
]

function Nav() {
    return (
        <div className={styles.nav_container}>

                <div className={styles.nav_menu_container}>
                    <div className={styles.menu_container_link_hidden}>
                            <Link href={"https://www.millionandup.com/"}>Our website</Link>
                            {/* <label htmlFor="Idioma">{t("footer.language_txt")}</label>  */}
                            <Select placeholder='Select your country' options={languages} />
                    </div>
                    
                    <div className={styles.nav_img_container}>
                        <Image src="/images/logo.svg" layout="fill" objectFit="contain" alt="Logo de Million and up 2023"/>
                    </div>

                    <div className={styles.select_lenguajes_container}>
                        <Link href={"https://www.millionandup.com/"}>Our website</Link>
                            {/* <label htmlFor="Idioma">{t("footer.language_txt")}</label>  */}
                            <Select placeholder='Select your country' options={languages} value={"es"}/>
                    </div>
                </div>

            <h3>Principales 100 Criptomonedas del mercado</h3>
            
        </div>
    );
}

export default Nav;