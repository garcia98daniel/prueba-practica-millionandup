import React, { useEffect, useState } from "react";
import { Icon, Label, Table, Pagination } from "semantic-ui-react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { currencyDetailRequesting } from "../../redux/currency/actions";
import { ICurrencyState, Currency } from "../../ts-types/custom.types";

//styles
import styles from "./styles.module.css";
import { Popup } from "semantic-ui-react";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import { Button } from "semantic-ui-react";


function CurrencyDetails() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query;

  const [t, i18n] = useTranslation("global");

  const { requesting, success, error, currency } = useSelector((state: ICurrencyState) => state.currencyReducer);


  useEffect(() => {
    // Initial call when component mounts
    dispatch(currencyDetailRequesting(String(id)));
  }, [id]);


  return (
    <>
      <Nav />
      <Button icon labelPosition='left' onClick={() => router.back()}>
      <Icon name='left arrow' />
      {t("go_back_txt")}
    </Button>
      
      <h1 className={styles.tittle}>{currency.length>0 && currency[0].name}</h1>

    <Table celled className={styles.table} unstackable selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{t("currenciesTable_header_symbol_txt")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Symbol")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("currenciesTable_header_name_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("Rank")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_priceUSD_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_24h_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_1h_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_7h_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("Price (BTC)")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_marketCap_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_volumen24h_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("Volume 24h (Adjusted)")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_supply_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("Total Supply")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Max Supply")}</Table.HeaderCell> */}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {currency.length>0 && currency.map((crypto: Currency) => (
          <Table.Row key={crypto.id} onClick={() => router.push(`/currency/${crypto.id}`)}>
            <Table.Cell>
            {/* <Table.Cell>{crypto.symbol}</Table.Cell> */}
              <Label ribbon>{crypto.symbol}</Label>
            </Table.Cell>
            <Table.Cell>{crypto.name}</Table.Cell>
            <Table.Cell>{crypto.rank}</Table.Cell>
            <Table.Cell>{crypto.price_usd}</Table.Cell>
            <Table.Cell className={parseInt(crypto.percent_change_24h) > 0 ? styles.positive : styles.negative}>
            {parseInt(crypto.percent_change_24h) > 0 ? <Icon name="caret up"/> : <Icon name="caret down"/>}{crypto.percent_change_24h}</Table.Cell>
            <Table.Cell className={parseInt(crypto.percent_change_1h) > 0 ? styles.positive : styles.negative}>
            {parseInt(crypto.percent_change_1h) > 0 ? <Icon name="caret up"/> : <Icon name="caret down"/>}{crypto.percent_change_1h}</Table.Cell>
            <Table.Cell className={parseInt(crypto.percent_change_7d) > 0 ? styles.positive : styles.negative}>
            {parseInt(crypto.percent_change_7d) > 0 ? <Icon name="caret up"/> : <Icon name="caret down"/>}{crypto.percent_change_7d}</Table.Cell>
            <Table.Cell>{crypto.price_btc}</Table.Cell>
            <Table.Cell>{crypto.market_cap_usd}</Table.Cell>
            <Table.Cell>{crypto.volume24}</Table.Cell>
            <Table.Cell>{crypto.volume24a}</Table.Cell>
            <Table.Cell>{crypto.csupply}</Table.Cell>
            <Table.Cell>{crypto.tsupply}</Table.Cell>
            {/* <Table.Cell>{crypto.msupply}</Table.Cell> */}
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="15"> {/* Adjust the colspan based on the number of header cells */}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    </>
  );
}

export default CurrencyDetails;
