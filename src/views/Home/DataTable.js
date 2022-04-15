import Loading from "views/Loading";
import React from "react";
import { useSelector } from "react-redux";
import Table from "components/table";
import { expandColumns, mianTableColumns } from "./TableColumns";

const DataTable = () => {
  const { coins, selectedCoin } = useSelector((state) => state.authReducer);

  const expandTable = (
    <Table columns={expandColumns} expandable={false} data={[selectedCoin]} />
  );

  return !coins ? (
    <Loading />
  ) : (
    <div>
      <Table
        columns={mianTableColumns}
        data={coins}
        expandable={true}
        expandComponent={expandTable}
      />
    </div>
  );
};

export default DataTable;
