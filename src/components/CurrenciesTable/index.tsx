import React, { useEffect, useState } from "react";
import { Icon, Label, Table, Pagination } from "semantic-ui-react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { currencyRequesting } from "../../redux/currency/actions";
import { ICurrencyState, Currency } from "../../ts-types/custom.types";

//styles
import styles from "./styles.module.css";

interface currenciesTableProps{
  filterText:string
}

function CurrenciesTable({filterText}:currenciesTableProps) {
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation("global");

  const { requesting, success, error, currency } = useSelector((state: ICurrencyState) => state.currencyReducer);


  useEffect(() => {
    // Initial call when component mounts
    dispatch(currencyRequesting());

    // Set up interval to execute currencyRequesting every minute
    const intervalId = setInterval(() => {
      dispatch(currencyRequesting());
    }, 60000); // 60000 milliseconds = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Filter currencies based on the filterText
  const filteredCurrencies = currency.filter((crypto: Currency) =>
    crypto.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      

    <Table celled className={styles.table} unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{t("currenciesTable_header_symbol_txt")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Symbol")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("currenciesTable_header_name_txt")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Rank")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("currenciesTable_header_priceUSD_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_24h_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_1h_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_7h_txt")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Price (BTC)")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("currenciesTable_header_marketCap_txt")}</Table.HeaderCell>
          <Table.HeaderCell>{t("currenciesTable_header_volumen24h_txt")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Volume 24h (Adjusted)")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("currenciesTable_header_supply_txt")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Total Supply")}</Table.HeaderCell> */}
          {/* <Table.HeaderCell>{t("Max Supply")}</Table.HeaderCell> */}
          {/* Add other header cells based on your Currency interface */}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {filteredCurrencies.map((crypto: Currency) => (
          <Table.Row key={crypto.id}>
            <Table.Cell>
            {/* <Table.Cell>{crypto.symbol}</Table.Cell> */}
              <Label ribbon>{crypto.symbol}</Label>
            </Table.Cell>
            <Table.Cell>{crypto.name}</Table.Cell>
            {/* <Table.Cell>{crypto.rank}</Table.Cell> */}
            <Table.Cell>{crypto.price_usd}</Table.Cell>
            <Table.Cell className={parseInt(crypto.percent_change_24h) > 0 ? styles.positive : styles.negative}>
            {parseInt(crypto.percent_change_24h) > 0 ? <Icon name="caret up"/> : <Icon name="caret down"/>}{crypto.percent_change_24h}</Table.Cell>
            <Table.Cell className={parseInt(crypto.percent_change_1h) > 0 ? styles.positive : styles.negative}>
            {parseInt(crypto.percent_change_1h) > 0 ? <Icon name="caret up"/> : <Icon name="caret down"/>}{crypto.percent_change_1h}</Table.Cell>
            <Table.Cell className={parseInt(crypto.percent_change_7d) > 0 ? styles.positive : styles.negative}>
            {parseInt(crypto.percent_change_7d) > 0 ? <Icon name="caret up"/> : <Icon name="caret down"/>}{crypto.percent_change_7d}</Table.Cell>
            {/* <Table.Cell>{crypto.price_btc}</Table.Cell> */}
            <Table.Cell>{crypto.market_cap_usd}</Table.Cell>
            <Table.Cell>{crypto.volume24}</Table.Cell>
            {/* <Table.Cell>{crypto.volume24a}</Table.Cell> */}
            <Table.Cell>{crypto.csupply}</Table.Cell>
            {/* <Table.Cell>{crypto.tsupply}</Table.Cell> */}
            {/* <Table.Cell>{crypto.msupply}</Table.Cell> */}
            {/* Add other cells based on your Currency interface */}
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="9"> {/* Adjust the colspan based on the number of header cells */}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    </>
  );
}

export default CurrenciesTable;
