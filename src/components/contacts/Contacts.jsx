import "./contacts.css";
import { FaTelegramPlane, FaGithub, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__container">
        <h2 className="contacts__title">Контакты</h2>

        <p className="contacts__text">
          Открыт к новым проектам, сотрудничеству и интересным идеям. Напиши —
          обсудим.
        </p>

        <div className="contacts__links">
          <a
            href="https://t.me/bro_devol"
            target="_blank"
            rel="noreferrer"
            className="contacts__item"
          >
            <FaTelegramPlane />
            <span>Telegram</span>
          </a>

          <a
            href="https://github.com/Ivan1990Nik"
            target="_blank"
            rel="noreferrer"
            className="contacts__item"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
