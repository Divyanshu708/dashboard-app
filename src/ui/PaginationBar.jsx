import React, { useState } from "react";
import { Pagination } from "antd";
import "../scss/index.scss";

const PaginationBar = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="pagination">
      <Pagination
        current={current}
        onChange={onChange}
        total={50}
        className="btn"
        style={{ color: "orange" }}
      />
    </div>
  );
};
export default PaginationBar;
