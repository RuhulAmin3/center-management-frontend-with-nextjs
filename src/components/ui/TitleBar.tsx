import React from "react";

type TitleBarType = {
  title: string;
  children: React.ReactNode | React.ReactElement;
};

const TitleBar = ({ title, children }: TitleBarType) => {
  return (
    <div style={{ padding: "15px 0px" }}>
      <h3 style={{ marginBottom: "8px", fontSize: "22px" }}>{title}</h3>
      {children}
    </div>
  );
};

export default TitleBar;
