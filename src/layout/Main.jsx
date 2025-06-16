import DownloadExtensionSection from "../sections/DownloadExtensionSection";
import Faqs from "../sections/Faqs";
import Features from "../sections/Features";
import Hero from "../sections/Hero";

const Main = () => {
  return (
    <main>
      <Hero />
      <Features />
      <DownloadExtensionSection />
      <Faqs />
    </main>
  );
};

export default Main;
