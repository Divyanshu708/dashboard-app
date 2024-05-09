import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

import "../scss/index.scss";

const items = [
  {
    key: "1",
    label: <span className="dropDownMenuItems">Hindi</span>,
  },
  {
    key: "2",
    label: <span className="dropDownMenuItems">Español</span>,
  },
  {
    key: "3",
    label: <span className="dropDownMenuItems">日本語</span>,
  },
];
export default function DropDown({ icon }) {
  return (
    <div className="dropDown">
      <img src={icon} alt="" />
      <Dropdown
        className="dropDown"
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ["3"],
        }}
      >
        <Typography.Link>
          <Space className="dropDown-content">
            <span>English</span>
            <DownOutlined style={{ marginRight: "1.4rem" }} />
          </Space>
        </Typography.Link>
      </Dropdown>
    </div>
  );
}
