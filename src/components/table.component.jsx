import { HotTable, HotColumn } from "@handsontable/react-wrapper";
import { registerAllModules } from "handsontable/registry";
import "handsontable/styles/handsontable.min.css";
import "handsontable/styles/ht-theme-main.min.css";
import { transactions } from "../data/data";
import numbro from "numbro";
import fiFI from "numbro/languages/fi-FI";

registerAllModules();
numbro.registerLanguage(fiFI);

const formatFI = {
  pattern: "0 0,00",
  culture: "fi-FI",
};

const Table = () => {
  console.log(transactions);
  return (
    <HotTable
      // autoRowSize={true}
      // autoColumnSize={true}
      data={transactions}
      height={1000}
      rowHeaders={false}
      colHeaders={true}
      manualColumnMove={true}
      locale='fi-FI'
      navigableHeaders={true}
      tabNavigation={true}
      multiColumnSorting={true}
      headerClassName='htLeft'
      licenseKey='non-commercial-and-evaluation'
      width={1370}
    >
      <HotColumn title='Company' data='company'></HotColumn>
      <HotColumn
        title='IBAN'
        data='iban'
        // type='dropdown'
        // source={["United Kingdom", "Japan", "United States"]}
      ></HotColumn>
      <HotColumn title='BIC' data='bic'></HotColumn>
      <HotColumn title='Currency' data='currency'></HotColumn>
      <HotColumn
        title='Amount'
        data='amount'
        type='numeric'
        numericFormat={formatFI}
      ></HotColumn>
      <HotColumn
        correctFormat={true}
        title='Date'
        data='date'
        dateFormat='DD/MM/YYYY'
        type='date'
      ></HotColumn>
    </HotTable>
  );
};

export default Table;
