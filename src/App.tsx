import { Header } from "./components/Header/Header";
import "./css/index.css"
import "./css/fontawesome/css/all.css"
import { Section } from "./components/Section/Section";
import { ProjetosSection } from "./components/Section/projetos/ProjetosSection";
import { ContatoSection } from "./components/Section/contato/ContatoSection";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section tema="color" conteudo={<ProjetosSection />}/>
      <Section tema="white" conteudo={<ContatoSection />}/>
      <Footer />
    </div>
  );
}

export default App;