// src/components/footer/Footer.jsx
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <h3>Бро.dev</h3>
          <p>React-разработчик. Практика, рост, польза.</p>
        </div>

        <nav className="footer__nav">
          <a href="#hero">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#skills">Навыки</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="footer__contacts">
          <a href="mailto:your@email.com">your@email.com</a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Бро.dev — все права защищены
      </div>
    </footer>
  );
};

export default Footer;
