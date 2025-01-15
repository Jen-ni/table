import { HotTable, HotColumn } from "@handsontable/react-wrapper";
import { registerAllModules } from "handsontable/registry";
import "handsontable/styles/handsontable.min.css";
// import "handsontable/styles/ht-theme-main.min.css";
import "../styles/ht-theme-table.scss";
import { transactions } from "../data/data";
import numbro from "numbro";
import fiFI from "numbro/languages/fi-FI";

registerAllModules();
numbro.registerLanguage(fiFI);

const formatFI = {
  pattern: "0 0,00",
  culture: "fi-FI",
};

const Table = ({ ref }) => {
  const afterChange = (a, b) => console.log(a, b);
  return (
    <div className='handsontable-container hot-table-theme'>
      <HotTable
        // autoRowSize={true}
        // autoColumnSize={true}
        afterChange={afterChange}
        data={transactions}
        rowHeaders={false}
        className='hot-table-theme'
        colHeaders={true}
        manualColumnMove={true}
        locale='fi-FI'
        navigableHeaders={true}
        ref={ref}
        tabNavigation={true}
        multiColumnSorting={true}
        headerClassName='htLeft'
        licenseKey='non-commercial-and-evaluation'
        themeName='hot-table-theme'
        // rowHeights={40}
      >
        <HotColumn
          title='Company'
          data='company'
          columnSorting
          readOnly
        ></HotColumn>
        <HotColumn
          title='IBAN'
          data='iban'
          readOnly
          // type='dropdown'
          // source={["United Kingdom", "Japan", "United States"]}
        ></HotColumn>
        <HotColumn title='BIC' data='bic' readOnly></HotColumn>
        <HotColumn title='Currency' data='currency' readOnly></HotColumn>
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
          datePickerConfig={{
            // First day of the week (0: Sunday, 1: Monday, etc)
            firstDay: 0,
            showWeekNumber: true,
            disableDayFn(date) {
              // Disable Sunday and Saturday
              return date.getDay() === 0 || date.getDay() === 6;
            },
          }}
        ></HotColumn>
      </HotTable>
    </div>
  );
};

export default Table;
