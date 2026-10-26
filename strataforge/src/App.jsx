import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Founders from "./components/Founders";
import About from "./components/About";
import Pricing from "./components/Pricing";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";

export default function App() {
  if (window.location.pathname.replace(/\/$/, "") === "/projects") {
    return (
      <ProjectsPage />
    );
  }

  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Founders />
        <About />
        <Pricing />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
