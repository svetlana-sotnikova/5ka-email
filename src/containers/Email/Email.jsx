import React from "react";
import { Box } from "../../components";
import { fontFamilies } from "../../styles";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Info } from "./Info";
import { Points } from "./Points";
import { Promo } from "./Promo";

export const Email = () => (
  <Box
    align="center"
    style={{
      fontFamily: fontFamilies.Arial,
      fontSize: 16,
      maxWidth: 600,
      minWidth: 320,
      lineHeight: 1.2,
    }}
  >
    <Header />
    <Promo />
    <Points />
    <Info />
    <Footer />
  </Box>
);
