import React from "react";

type SocialPropsType = {
  children: React.ReactNode | React.ReactElement;
  backgroundColor: string;
  message: string;
  follower: string;
};
const SocialCard = ({
  children,
  backgroundColor,
  message,
  follower,
}: SocialPropsType) => {
  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "30px 20px",
        textAlign: "center",
        backgroundColor: backgroundColor,
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: "16px",
        }}
      >
        {children}
        <span style={{ marginLeft: "10px" }}>{message}</span>
      </div>
      <div
        style={{
          fontSize: "26px",
          marginTop: "10px",
        }}
      >
        {follower}
      </div>
    </div>
  );
};

export default SocialCard;
