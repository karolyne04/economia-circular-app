import Formulario from "../components/Formulario";
import { FaRecycle, FaLeaf, FaGlobe } from "react-icons/fa";
import "../components/Home.css"; // vamos criar esse arquivo
import globo from "../assets/globo.jpg";
import green from "../assets/chart-green.webp"
import infinito from "../assets/ifinito.avif"

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1 className="home-title">O que é Economia Circular?</h1>
        <p className="home-desc">
          A economia circular é um modelo de produção e consumo que promove o
          reaproveitamento de materiais e produtos existentes pelo maior tempo
          possível. Diferente do modelo linear, ela busca reduzir resíduos e
          preservar recursos naturais.
        </p>
        <div className="home-icons">
          <FaRecycle title="Reciclagem" />
          <FaLeaf title="Sustentabilidade" />
          <FaGlobe title="Consumo consciente" />
        </div>
        <div className="home-images">
          <img src={globo} alt="globo" className="home-img" />
          <img src={green} alt="gráfico economia circular" className="home-img" />
          <img src={infinito} alt="infinito" className="home-img" />
        </div>
      </section>
      <section className="home-form">
        <h2 className="home-form-title">Envie sua opinião</h2>
        <Formulario />
      </section>
    </div>
  );
}