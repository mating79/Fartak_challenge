import React from "react";
import useInput from "utils/customHooks/useInput";

const Filters = () => {
  const coin = useInput("");
  return <input placeholder="Search..." className="custom-input" {...coin} />;
};

export default Filters;
