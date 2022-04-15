import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROW_EXPAND, ROW_EXPAND_DATA } from "redux/actions/types";

const TableRow = (props) => {
  const dispatch = useDispatch();

  const { row, index, columns, expandable, expandComponent } = props;

  const collapse = useSelector((state) => state.authReducer.activeRow);

  const handleCollapse = (index) => {
    dispatch({
      type: ROW_EXPAND,
      data: collapse === index ? null : index,
    });
  };

  useEffect(() => {
    if (collapse == index) {
      dispatch({
        type: ROW_EXPAND_DATA,
        data: row,
      });
    }
  }, [row]);

  return (
    <div className="table-row-wrapper">
      <div className="table-row">
        {columns.map((col) => (
          <Fragment key={col.id}>
            {col.cell ? (
              col.cell(row, index)
            ) : (
              <span className="table-cell">{row[col.selector]}</span>
            )}
          </Fragment>
        ))}
        <span className="cursor-pointer">
          {expandable ? (
            <span onClick={() => handleCollapse(index)}>
              <i
                className={`arrow ${
                  collapse === index ? "arrow-down" : "arrow-up"
                }`}
              ></i>
            </span>
          ) : (
            <Link to="/trade" className="custom-button">
              trade
            </Link>
          )}
        </span>
      </div>
      {collapse === index && <div>{expandComponent}</div>}
    </div>
  );
};

export default TableRow;
