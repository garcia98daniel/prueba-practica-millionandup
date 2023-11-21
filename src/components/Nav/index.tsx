import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Select } from 'semantic-ui-react';

const languages = [
  { key: 'es', value: 'es', text: 'Español' },
  { key: 'en', value: 'en', text: 'Inglés' },
];

function Nav() {
  const { t, i18n } = useTranslation("global");
  const router = useRouter();

  const handleChangeLanguage = (e, { value }) => {
    i18n.changeLanguage(value);
    router.push('/'+value);
  };

  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_menu_container}>
        <div className={styles.menu_container_link_hidden}>
          <Link href="https://www.millionandup.com/">{t("nav_Our_website")}</Link>
          <Select
            className={styles.select_language}
            placeholder={t("nav_input_language_placeholder")}
            options={languages}
            value={i18n.language}
            onChange={handleChangeLanguage}
          />
        </div>

        <div className={styles.nav_img_container}>
          <Image src="/images/logo.svg" layout="fill" objectFit="contain" alt="Logo de Million and up 2023" />
        </div>

        <div className={styles.select_lenguajes_container}>
          <Link href="https://www.millionandup.com/">{t("nav_Our_website")}</Link>
          <Select
            placeholder={t("nav_input_language_placeholder")}
            options={languages}
            value={i18n.language}
            onChange={handleChangeLanguage}
          />
        </div>
      </div>

      <h3>{t("nav_txt_1")}</h3>
    </div>
  );
}

export default Nav;
