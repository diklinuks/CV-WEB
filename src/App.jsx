import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "./components/Cursor";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

const pageMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
};
const Page = ({ children }) => <motion.main {...pageMotion}>{children}</motion.main>;

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="flex min-h-screen flex-col">
      <Cursor />
      <ScrollToTop />
      <Menu />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/cv" element={<Page><CV /></Page>} />
            <Route path="/projects" element={<Page><Projects /></Page>} />
            <Route path="/projects/:slug" element={<Page><ProjectDetail /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </div>
      {!isHome && <Footer />}
    </div>
  );
}
