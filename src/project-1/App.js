import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/features/Header/Header";
import Footer from "./components/features/Footer/Footer";

const App = () => {
  const [scrolledFor, setScrolledFar] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolledFar(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "300vh" }} onScroll={() => console.log("scrolled")}>
      <Header scrolledFor={scrolledFor} />
      <Routes>
        <Route path="/" element={<div>Basic</div>} />
        <Route path="/sth" element={<div>Sth</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
