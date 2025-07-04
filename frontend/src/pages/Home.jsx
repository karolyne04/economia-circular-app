import Formulario from "../components/Formulario";
import { FaRecycle, FaLeaf, FaGlobe } from "react-icons/fa";
import "../components/Home.css"; 
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
          <figure>
            <img src={globo} alt="Planeta Terra sustentável" className="home-img" />
            <figcaption>O planeta precisa de novos ciclos</figcaption>
          </figure>
          <figure>
            <img src={green} alt="Gráfico de economia circular" className="home-img" />
            <figcaption>O ciclo circular: produção, uso, reciclagem</figcaption>
          </figure>
          <figure>
            <img src={infinito} alt="Símbolo do infinito" className="home-img" />
            <figcaption>Reaproveitamento contínuo de recursos</figcaption>
          </figure>
          
        </div>
      </section>
      <section className="home-form">
        <h2 className="home-form-title">Envie sua opinião</h2>
        <Formulario />
      </section>
    </div>
  );
}