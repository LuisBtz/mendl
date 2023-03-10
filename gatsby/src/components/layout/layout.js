import React from "react";
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Footer from "./footer";
import Header from "./header"




function Layout({ children  }) {



  return (
    <>
      <Normalizer />
      <Typography />
      <Header/>
      <main >{children}</main>
      <Footer />
    </>
  )
}


export default Layout
