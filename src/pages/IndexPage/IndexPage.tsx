import Head from "next/head";
import React from "react";

import Footer from "src/components/Footer/Footer";
import Header from "src/components/Header/Header";

export default () => {
  return (
    <section>
      <Head>
        <title>Zenkilies | Knowledge has its rewards, don't you think?</title>
      </Head>

      <Header/>

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          You know what? I'm still working on it!? 🤣 🤣 🤣
        </div>
      </div>

      <Footer/>
    </section>
  );
}
