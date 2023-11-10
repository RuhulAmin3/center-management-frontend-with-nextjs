import { Space } from "antd";
import React from "react";

const NoticeBoardItem = ({ notice }: any) => {
  return (
    <Space
      direction="vertical"
      style={{
        borderBottom: "1px solid #ededed",
        paddingBottom: "14px",
        marginBottom: " 18px",
        width: "100%",
      }}
    >
      <p
        style={{
          fontSize: "16px",
          background: "#40dfcd",
          color: "#ffffff",
          padding: "5px 14px",
          borderRadius: "20px",
          display: "inline-block",
        }}
      >
        {notice.date}
      </p>
      <p
        style={{
          fontWeight: "500",
          fontSize: "16px",
        }}
      >
        {notice.details}
      </p>
      <p
        style={{
          color: "#646464",
          fontSize: "15px",
        }}
      >
        Noticed by: {notice.noticeBy}
      </p>
    </Space>
  );
};

export default NoticeBoardItem;
