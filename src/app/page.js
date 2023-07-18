import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Mainvisual } from "./components/Mainvisual";
import { News } from "./components/News";
import { Works } from "./components/Works";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Mainvisual />
        <About />
        <Works />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
