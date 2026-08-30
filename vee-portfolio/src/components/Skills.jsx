import "./Skills.css";
import figma from "../assets/figma.svg";
import tailwind from "../assets/tailwind-css.png"

const SKILLS = [
  { name: "React.js", level: 80, icon: "react", color: "#61dafb" },
  { name: "JavaScript", level: 85, icon: "js", color: "#f0db4f" },
  { name: "HTML5", level: 95, icon: "html5", color: "#e34f26" },
  { name: "CSS3", level: 90, icon: "css3", color: "#2965f1" },
  { name: "Figma", level: 80, icon: "figma", color: "#7952b3" },
  { name: "Tailwind", level: 50, icon: "tailwind", color: "#fff" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container skills__inner">
        <div className="skills__intro">
          <span className="eyebrow">My Skills</span>
          <h2 className="section-heading">
            Technical Expertise &amp; Core Skill Set
          </h2>
          <p className="skills__desc">
            I build responsive, scalable, and high-performing web applications
            using React.js and modern frontend technologies. My focus is on
            clean architecture, reusable components, performance optimization,
            and delivering seamless digital experiences.
          </p>
        </div>

        <div className="skills__grid">
          {SKILLS.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card__bar" />
              <SkillIcon type={skill.icon} color={skill.color} />
              <h3>{skill.name}</h3>
              <p>{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ type, color }) {
  const common = { width: 40, height: 40, viewBox: "0 0 24 24" };

  switch (type) {
    case "react":
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth="1">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke={color}
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke={color}
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    case "js":
      return (
        <svg {...common}>
          <rect width="24" height="24" rx="3" fill={color} />
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="#000"
          >
            JS
          </text>
        </svg>
      );
    case "html5":
      return (
        <svg {...common}>
          <path d="M3 2l1.7 18L12 22l7.3-2L21 2H3z" fill={color} />
          <path
            d="M12 4.4v15.9l5.9-1.6L19.2 4.4H12z"
            fill="#c53527"
            opacity="0.001"
          />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="#fff"
          >
            5
          </text>
        </svg>
      );
    case "css3":
      return (
        <svg {...common}>
          <path d="M3 2l1.7 18L12 22l7.3-2L21 2H3z" fill={color} />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="#fff"
          >
            3
          </text>
        </svg>
      );
    case "figma":
      return (
        <img
          src={figma}
          alt="Figma"
          width={common.width}
          height={common.height}
          style={{ display: "block" }}
        />
      );
    case "tailwind":
      return (
        <img
          src={tailwind}
          alt="Tailwind"
          width={common.width}
          height={common.height}
          style={{ display: "block" }}
        />
      );
    default:
      return null;
  }
}
