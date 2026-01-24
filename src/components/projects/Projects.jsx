// src/components/projects/Projects.jsx
import './projects.css';

const projects = [
  {
    title: 'Сайт доставки роллов',
    description:
      'Коммерческий сайт доставки еды. Реальный проект, используется бизнесом ежедневно. Полный цикл: от верстки до логики корзины и оформления заказа.',
    stack: ['React', 'JavaScript', 'Vite', 'CSS', 'EmailJS'],
    demo: 'https://www.masteroll.net', // если есть
    /* github: 'https://ivan1990nik.github.io/masteroll-react/', */
    highlight: true,
  },
  {
    title: "Посуточная аренда квартир",
    description: "Сайт для сдачи квартир посуточно. Каталог, адаптив, форма заявки.",
    stack: ['React', 'JavaScript', 'Vite', 'CSS', ],
    /* demo: "https://...", */
    github: 'https://masteroll.net',
    highlight: true,
    code: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Проекты</h2>

        <div className="projects__list">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                project.highlight ? 'highlight' : ''
              }`}
            >
              <h3 className="project-card__title">
                {project.title}
                {project.highlight && (
                  <span className="project-badge">PRODUCTION</span>
                )}
              </h3>

              <p className="project-card__description">
                {project.description}
              </p>

              <ul className="project-card__stack">
                {project.stack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className="project-card__links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Демо
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
