import GlobalStyle from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import LayoutWrapper from "@/components/LayoutWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
