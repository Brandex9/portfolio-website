import React from "react";
import useLocalStorage from "use-local-storage";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const app = () => {
  const defaultDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <>
      <div className="app-light" data-theme={theme}>
        <span>Easy Darkmode and themes in react</span>
        <button className="test-light" onClick={switchTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default app;
