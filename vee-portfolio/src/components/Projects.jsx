import "./Projects.css";
import midlex from "../assets/midlex-app.png";
import mimi from "../assets/mimi.jpeg";
import paces from "../assets/paces.jpeg";
import woodsy from "../assets/the-woodsy-shop.webp";
import fastchops from "../assets/fastchop.png";
import ihome from "../assets/ihome.png";

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
    image: paces,
  },
  {
    title: "FastChops",
    info: "A food delivery website for quick meals and chops",
    href: "https://fast-chops.vercel.app/",
    image: fastchops,
  },
  {
    title: "the-woodsy-shop",
    info: "A responsive furniture website for shopping quality, and affordable furniture",
    href: "https://the-woodsy-shop.vercel.app/",
    image: woodsy,
  },
  {
    title: "iHome",
    info: "A real estate website to purchase or rent the best landed properties",
    href: "https://i-home-nu.vercel.app/",
    image: ihome,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container projects__inner">
        <span className="eyebrow">My Projects</span>
        <h2 className="section-heading projects__heading">
          A Few Of My Projects
        </h2>
        <p className="projects__desc">
          Here are some of the projects I can build for you using modern
          frontend technologies. These works highlight my ability to create
          scalable, responsive, and visually engaging web applications.
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-arrow-up-right preview-icon"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <a
          href="https://github.com/victoryemeh"
          target="_blank"
          rel="noreferrer"
          className="projects__cta"
        >
          View more
          <span className="projects__cta-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-up-right preview-icon"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
