import React from "react";
import style from "./page.module.css";
import Header from "@/components/services/header/Header.jsx";
import Main from "@/components/services/main/Main";
import Accordion from "@/components/services/accordion/Accordion";
const page = () => {
  return (
    <main className={style.integratedservices}>
      {/* header */}
      <Header />
      <Main />
      <Accordion />
    </main>
  );
};

export default page;
