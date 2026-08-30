import './About.css';
import Vee2 from "../assets/Vee2.jpeg";




const DETAILS = [
  { label: 'Name', value: 'Emeh Victory' },
  { label: 'Location', value: 'Lagos, Nigeria' },
  
  { label: 'Email', value: 'victoryemeh98@gmail.com' },
];

const SOCIALS = ['f', 't', 'in', 'ig'];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__media">
          <img src={Vee2} alt="Victory Emeh" />
          {/* <ul className="about__socials">
            {SOCIALS.map((icon) => (
              <li key={icon}>
                <a href="#contact" aria-label="social link">
                  <span className={`dot dot--${icon}`} />
                </a>
              </li>
            ))}
          </ul> */}
        </div>

        <div className="about__content">
          <span className="eyebrow">About Me</span>
          <h2 className="section-heading">
            Transforming Ideas into Scalable Frontend Solutions
          </h2>
          <p className="about__role">Frontend Developer</p>

          <p className="about__paragraph">
            I am a results-driven Frontend Developer with experience building
            scalable, responsive web applications using React.js and modern UI
            technologies. I specialize in reusable component architecture, API
            integration, and performance optimization.
          </p>

          <p className="about__paragraph">
            Experienced in remote collaboration and deadline-driven
            environments, I am actively seeking the opportunity to contribute to
            impactful, performance-focused products.
          </p>

          <dl className="about__grid">
            {DETAILS.map((d) => (
              <div key={d.label} className="about__grid-item">
                <dt>{d.label} :</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about__actions">
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
