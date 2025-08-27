import React from "react";
import Faq from "../components/Faq";
import Error from "../components/Error";

function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 pt-24">
      <Error />
      <Faq />
    </main>
  );
}

export default HomePage;
