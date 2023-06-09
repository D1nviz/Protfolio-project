import StyledComponentsRegistry from "@/app/registry";
import { Wrapper } from "@/layouts/Wrapper";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <StyledComponentsRegistry>
          <Wrapper>
            <Header />
            <main>{children}</main>
          </Wrapper>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
