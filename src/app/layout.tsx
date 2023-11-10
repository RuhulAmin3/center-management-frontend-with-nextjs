import type { Metadata } from "next";
import ReduxProvider from "@/lib/Provider";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";
import { ConfigProvider } from "antd";
import theme from "@/theme/theme";

export const metadata: Metadata = {
  title: "Center management",
  description: "H.Haque Coaching center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
