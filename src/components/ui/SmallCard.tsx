import { defaultStyles } from "@/app/constants/styles";
type PropsType = {
  children: React.ReactNode | React.ReactElement;
  title: string;
  number: string;
  flexDirection?: string;
  iconBackground: string;
};

const SmallCard = ({
  children,
  title,
  number,
  flexDirection,
  iconBackground,
}: PropsType) => {
  return (
    <div
      style={{
        ...defaultStyles,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: flexDirection ? "column" : "row",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          fontSize: "42px",
          height: "85px",
          width: "85px",
          borderRadius: "50%",
          background: iconBackground,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ color: "#a8a8a8", marginBottom: "5px" }}>{title}</p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#111111",
          }}
        >
          {number}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
