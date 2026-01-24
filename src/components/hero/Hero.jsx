import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__badge">Frontend Developer</span>

        <h1>
          Делаю <span>понятные интерфейсы</span><br />
          и рабочие сайты
        </h1>

        <p>
          JavaScript • React • Vite<br />
          Реальные проекты, аккуратный код, осознанный подход
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn primary">
            Проекты
          </a>
          <a href="#contacts" className="btn secondary">
            Связаться
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
