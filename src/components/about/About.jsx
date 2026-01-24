// src/components/about/About.jsx
import './about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">Обо мне</h2>

        <p className="about__text">
  Меня зовут Ваня. Я frontend-разработчик, специализирующийся на JavaScript и React.
</p>

<p className="about__text">
  В разработку пришёл осознанно: мне важно понимать, как работают вещи
  и создавать продукты, которые реально используют люди.
</p>

<p className="about__text">
  У меня есть опыт создания рабочего коммерческого сайта,
  который используется бизнесом каждый день.
  Сейчас я активно развиваюсь как React-разработчик.
</p>

<p className="about__text">
  Ценю аккуратный код, понятную логику и ответственность за результат.
</p>
      </div>
    </section>
  );
};

export default About;
