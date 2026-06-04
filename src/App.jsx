import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TopBar from "./components/TopBar";
import CursorGlow from "./components/CursorGlow";
import CosmicBackground from "./components/CosmicBackground";
import Splash from "./pages/Splash";
import Hub from "./pages/Hub";
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
  initial: { opacity: 0, filter: "blur(10px)", y: 16, scale: 0.985 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0, scale: 1 },
  exit: { opacity: 0, filter: "blur(10px)", y: -12, scale: 1.015 },
  transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] },
};
const Page = ({ children }) => <motion.main {...pageMotion}>{children}</motion.main>;

export default function App() {
  const location = useLocation();
  const path = location.pathname;
  const onSplashOrHub = path === "/" || path === "/menu";
  // Inner routes (incl. 404) get the shader background, rendered HERE — outside the
  // transformed/filtered page wrapper — so `fixed` stays anchored to the viewport
  // (full-bleed, no cut-off, even when the page scrolls).
  const showShaderBg = !onSplashOrHub;

  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      <ScrollToTop />
      {showShaderBg && <CosmicBackground />}
      <CursorGlow />
      <div className="grain" />
      {!onSplashOrHub && <TopBar />}
      <div className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={path}>
            <Route path="/" element={<Page><Splash /></Page>} />
            <Route path="/menu" element={<Page><Hub /></Page>} />
            <Route path="/cv" element={<Page><CV /></Page>} />
            <Route path="/projects" element={<Page><Projects /></Page>} />
            <Route path="/projects/:slug" element={<Page><ProjectDetail /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
