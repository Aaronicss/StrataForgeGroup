import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SecurityApproach from "./components/SecurityApproach";
import FirstPartner from "./components/FirstPartner";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Founders from "./components/Founders";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import LegalPage from "./components/LegalPage";

const legalPages = {
  "/privacy-policy": "privacy",
  "/terms-and-conditions": "terms",
  "/cookie-policy": "cookies",
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/projects") {
    return (
      <ProjectsPage />
    );
  }

  if (legalPages[path]) {
    return <LegalPage type={legalPages[path]} />;
  }

  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main>
        <Hero />
        <SecurityApproach />
        <Services />
        <FirstPartner />
        <Process />
        <Portfolio />
        <Founders />
        <About />
        <Pricing />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
