import './Projects.css';
import midlex from "../assets/midlex.png"
import mimi from "../assets/mimi.jpeg"
import paces from "../assets/paces.jpeg"

const PROJECTS = [
  {
    title: "Midlex Lawfirm Website",
    info: "A responsive lawfirm website designed to make finding and booking a law consultation seamless",
    href: "https://midlex-law-site-fawn.vercel.app/",
    image: midlex,
  },
  {
    title: "Mimi Kitchen",
    info: "A responsive recipe kitchen website designed to help Mimi attract and convert customers to her kitchen",
    href: "https://mimi-kitchen-chi.vercel.app/",
    image: mimi,
  },
  {
    title: "Paces",
    info: "A responsive ecommerce shoe website for shopping quality footwears with ease",
    href: "https://paces-five.vercel.app/",
    image:
      paces,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container projects__inner">
        <span className="eyebrow">My Projects</span>
        <h2 className="section-heading projects__heading">A Few Of My Projects</h2>
        <p className="projects__desc">
          Here are some of the projects I can build for you using modern frontend
          technologies. These works highlight my ability to create scalable,
          responsive, and visually engaging web applications.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__thumb">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-card__footer">
                <h3>{project.title}</h3>
                <p>{project.info}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  View Code
                  <span className="project-card__icon" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
