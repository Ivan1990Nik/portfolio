// src/components/skills/Skills.jsx
import './skills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';

const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
    ],
  },
  {
    title: 'Инструменты',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Vite' },
      { name: 'EmailJS' },
      { name: 'REST API' },
    ],
  },
  {
    title: 'Подход',
    items: [
      { name: 'Чистый код' },
      { name: 'Компонентный подход' },
      { name: 'Адаптивная верстка' },
      { name: 'UX прежде всего' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h2 className="section-title">Навыки</h2>

        <p className="skills__subtitle">
          Я не гонюсь за количеством технологий — я делаю понятные,
          поддерживаемые и рабочие интерфейсы.
        </p>

        <div className="skills__grid">
          {skills.map((block, index) => (
            <div key={index} className="skill-card">
              <h3>{block.title}</h3>

              <ul>
                {block.items.map((skill, i) => (
                  <li key={i}>
                    {skill.icon && (
                      <span className="skill-icon">{skill.icon}</span>
                    )}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
