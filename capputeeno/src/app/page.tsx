"use client";
import { GlobalStyle } from "./globals";
import { defaultTheme } from "./theme";
import { ThemeProvider } from "styled-components";

import { Header } from "../components/header/header";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header logoName="Capputeeno" />
      </ThemeProvider>
    </>
  );
}
