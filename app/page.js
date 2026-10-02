"use client";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import PageGlow from "./component/PageGlow";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // The layout's inline script has already set the class; sync React state with it.
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.theme = next ? "dark" : "light";
    } catch {}
  };

  return (
    <div className="relative">
      <PageGlow />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
