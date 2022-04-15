import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FILTER } from "redux/actions/types";
import useInput from "utils/customHooks/useInput";

const Filters = () => {
  const dispatch = useDispatch();
  const coin = useInput("");

  useEffect(() => {
    dispatch({ type: FILTER, data: { coinName: coin.value } });
  }, [coin.value]);

  return (
    <input placeholder="coin name..." className="custom-input" {...coin} />
  );
};

export default Filters;
