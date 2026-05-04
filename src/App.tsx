import Benefits from "./components/Benefits";
import ContactCTA from "./components/ContactCTA";
import FloatingCallButton from "./components/FloatingCallButton";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import PriceTable from "./components/PriceTable";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Gallery />
        <PriceTable />
        <Benefits />
        <ContactCTA />
      </main>

      <FloatingCallButton />
    </>
  );
}
