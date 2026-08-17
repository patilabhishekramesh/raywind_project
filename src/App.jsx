import { useState } from "react";
import { useSmoothScroll } from "./hooks/useSmoothScroll.js";
import { Preloader } from "./components/Preloader.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Stats } from "./components/Stats.jsx";
import { About } from "./components/About.jsx";
import { Services } from "./components/Services.jsx";
import { SolarSolutions } from "./components/SolarSolutions.jsx";
import { Process } from "./components/Process.jsx";
import { Projects } from "./components/Projects.jsx";
import { WhyChooseUs } from "./components/WhyChooseUs.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { FAQ } from "./components/FAQ.jsx";
import { FinalCTA } from "./components/FinalCTA.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { WhatsAppButton } from "./components/WhatsAppButton.jsx";
import { MobileDock } from "./components/MobileDock.jsx";

export default function App() {
  const [ready, setReady] = useState(false);

  useSmoothScroll(ready);

  if (!ready) {
    return <Preloader onComplete={() => setReady(true)} />;
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <SolarSolutions />
        <Process />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileDock />
    </>
  );
}
