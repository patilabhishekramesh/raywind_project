import { useState } from "react";
import { useSmoothScroll } from "./hooks/useSmoothScroll.js";
import { useHideDockOnForm } from "./hooks/useHideDockOnForm.js";
import { Preloader } from "./components/Preloader.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Stats } from "./components/Stats.jsx";
import { About } from "./components/About.jsx";
import { Services } from "./components/Services.jsx";
import { HomePackages } from "./components/HomePackages.jsx";
import { SolarSolutions } from "./components/SolarSolutions.jsx";
import { SubsidyCalculator } from "./components/SubsidyCalculator.jsx";
import { Process } from "./components/Process.jsx";
import { Projects } from "./components/Projects.jsx";
import { WhyChooseUs } from "./components/WhyChooseUs.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { FAQ } from "./components/FAQ.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { FloatingActions } from "./components/FloatingActions.jsx";
import { ScrollProgress } from "./components/ScrollProgress.jsx";

export default function App() {
  const [ready, setReady] = useState(false);

  useSmoothScroll(ready);
  useHideDockOnForm(ready);

  if (!ready) {
    return <Preloader onComplete={() => setReady(true)} />;
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar />
      <ScrollProgress />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <SubsidyCalculator />
        <HomePackages />
        <SolarSolutions />
        <Process />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
