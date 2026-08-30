import "./Hero.css";
import Vee1 from "../assets/Vee1.jpeg";
import Vee2 from "../assets/Vee2.jpeg";
import instagram from "../assets/insta-icon.png";
import linkedin from "../assets/linkedin-icon.png"
import facebook from "../assets/fb-icon.png"

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", icon: facebook },
  { label: "Twitter", href: "https://twitter.com", icon: "t" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: instagram },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">Hello,</p>
          <h1 className="hero__name">Victory Emeh</h1>
          <h2 className="hero__role">
            And I'm a <span className="highlight">Front-End Developer</span>
          </h2>
          <p className="hero__desc">
            Front-End Developer with experience specializing in
            React JS, JavaScript, and responsive design to create user-focused
            digital solutions.
          </p>

          <ul className="hero__socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon type={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__ring">
            <img src={Vee1} alt="a selfie of Victory Emeh" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ type }) {
  const svgPaths = {
    
    t: "M19 6.9c-.5.2-1 .4-1.6.5.6-.3 1-.9 1.2-1.6-.5.3-1.2.6-1.8.7A2.9 2.9 0 0 0 12 8.9c0 .2 0 .5.1.7-2.4-.1-4.6-1.3-6-3.1-.2.4-.4.9-.4 1.5 0 1 .5 1.9 1.3 2.5-.5 0-.9-.2-1.3-.4v.1c0 1.4 1 2.6 2.3 2.9-.2.1-.5.1-.8.1l-.6-.1c.4 1.2 1.5 2.1 2.9 2.1a5.8 5.8 0 0 1-3.6 1.2H5c1.3.8 2.8 1.3 4.4 1.3 5.3 0 8.2-4.4 8.2-8.2v-.4c.6-.4 1-.9 1.4-1.5z",
    
  };

  // If the type matches one of the SVG keys, render an SVG icon.
  if (svgPaths[type]) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d={svgPaths[type]} />
      </svg>
    );
  }

  // Otherwise assume `type` is an image URL and render an <img>.
  return (
    <img
      src={type}
      alt="social"
      width="16"
      height="16"
      style={{ display: "inline-block" }}
    />
  );
}
