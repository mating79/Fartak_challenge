import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import DataTable from "./DataTable";
import Filters from "./Filters";
import { handleConnectSocket } from "redux/actions/auth";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleConnectSocket());
  }, []);

  return (
    <div className="home-container">
      <div className="card">
        <div className="card-header">
          <Filters />
        </div>
        <div className="card-body">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
