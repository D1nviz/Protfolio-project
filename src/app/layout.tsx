import StyledComponentsRegistry from "@/app/registry";
import { Wrapper } from "@/layouts/Wrapper";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Dinviz | Portfolio",
  description: "Interesting portfolio with cool design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <Header />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Wrapper>
      </body>
    </html>
  );
}
