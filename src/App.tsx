import Benefits from "./components/Benefits";
import ContactCTA from "./components/ContactCTA";
import Environment from "./components/Environment";
import FloatingCallButton from "./components/FloatingCallButton";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Options from "./components/Options";
import PriceTable from "./components/PriceTable";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Gallery />
        <Benefits />
        <Options />
        <Environment />
        <PriceTable />
        <ContactCTA />
      </main>

      <FloatingCallButton />
    </>
  );
}
