import Loading from "components/Loading";
import React from "react";
import { useSelector } from "react-redux";
import Table from "utils/components/Table";

const DataTable = () => {
  const { coins, selectedCoin } = useSelector((state) => state.authReducer);

  const mianTableColumns = [
    {
      id: "1",
      title: "Coin Name",
      selector: "s",
    },
    {
      id: "2",
      title: "High Price",
      selector: "h",
    },
    {
      id: "3",
      title: "Open Price",
      selector: "o",
    },
  ];
  const expandColumns = [
    {
      id: "1",
      title: "Coin Name",
      selector: "s",
    },
    {
      id: "2",
      title: "Low Price",
      selector: "l",
    },
    {
      id: "3",
      title: "Open Price",
      selector: "o",
    },
  ];
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
