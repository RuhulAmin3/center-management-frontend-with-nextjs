import React from "react";
import { defaultStyles, defaultHeadingStyles } from "@/app/constants/styles";
import NoticeBoardItem from "./NoticeBoardItem";

type PropsType = {
  children?: React.ReactNode | React.ReactElement;
  maxHeight?: string;
};

const NoticeBoard = ({ children, maxHeight }: PropsType) => {
  return (
    <div
      style={{
        ...defaultStyles,
      }}
    >
      <h6 style={{ ...defaultHeadingStyles }}>Notice Board</h6>
      {children ? children : ""}
      <div
        style={{
          maxHeight: maxHeight ? maxHeight : "500px",
          overflowY: "scroll",
          paddingRight: "20px",
          scrollbarColor: "blue",
          scrollbarWidth: "thin",
        }}
      >
        {[
          new Array(20).fill(null).map((_, idx) => (
            <NoticeBoardItem
              key={idx}
              notice={{
                date: "10/02/2022",
                details:
                  "computer is the most wonderful contribution of modern scicence. But it has no ability to do anything by itself. It can operate by human and perform highly complicated work.",
                noticeBy: "Ruhul Amin",
              }}
            />
          )),
        ]}
      </div>
    </div>
  );
};

export default NoticeBoard;
