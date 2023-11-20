import React, { useEffect, useState } from "react";
import { Icon, Label, Table, Pagination } from "semantic-ui-react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { currencyRequesting } from "../../redux/currency/actions";
import { ICurrencyState, Currency } from "../../ts-types/custom.types";
import { Input } from "semantic-ui-react";

function CurrenciesTable() {
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation("global");

  const { requesting, success, error, currency } = useSelector((state: ICurrencyState) => state.currencyReducer);

  const [filterText, setFilterText] = useState(""); // State to store the filter text

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
      <Input
        icon="search"
        placeholder="Search by name..."
        value={filterText}
        onChange={(e, { value }) => setFilterText(value)}
      />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{t("Symbol")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Symbol")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("Name")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Rank")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("Price (USD)")}</Table.HeaderCell>
          <Table.HeaderCell>{t("% Change 24h")}</Table.HeaderCell>
          <Table.HeaderCell>{t("% Change 1h")}</Table.HeaderCell>
          <Table.HeaderCell>{t("% Change 7d")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Price (BTC)")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("Market Cap (USD)")}</Table.HeaderCell>
          <Table.HeaderCell>{t("Volume 24h")}</Table.HeaderCell>
          {/* <Table.HeaderCell>{t("Volume 24h (Adjusted)")}</Table.HeaderCell> */}
          <Table.HeaderCell>{t("Circulating Supply")}</Table.HeaderCell>
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
            <Table.Cell>{crypto.percent_change_24h}</Table.Cell>
            <Table.Cell>{crypto.percent_change_1h}</Table.Cell>
            <Table.Cell>{crypto.percent_change_7d}</Table.Cell>
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
          <Table.HeaderCell colSpan="16"> {/* Adjust the colspan based on the number of header cells */}
            <Pagination
              ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
              firstItem={{ content: <Icon name='angle double left' />, icon: true }}
              lastItem={{ content: <Icon name='angle double right' />, icon: true }}
              prevItem={{ content: <Icon name='angle left' />, icon: true }}
              nextItem={{ content: <Icon name='angle right' />, icon: true }}
              totalPages={2}
            />
          </Table.HeaderCell>

          {/* Add other Table.HeaderCells based on your requirements */}
        </Table.Row>
      </Table.Footer>
    </Table>
    </>
  );
}

export default CurrenciesTable;
