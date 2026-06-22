import './mediaQueries.css';
//icons
import { FaLinkedin, FaReact, FaFacebookSquare, FaArrowUp, FaJava, FaPython, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFlask, SiR, SiKotlin } from "react-icons/si";
import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { SiMysql } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoOpenOutline } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaArrowDown, FaLock } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

//cursor//
function Cursor() {
  return (
    <div id='cursor'>
      <AnimatedCursor
        innerSize={0}
        outerSize={50}
        outerAlpha={0.2}
        outerScale={1.7}
        outerStyle={{
          backgroundColor: "transparent",
          border: "solid 4px gray"
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '#underlined-element'
        ]}
        showSystemCursor={true}
      />
    </div>
  );
}

// helper to convert hex color to rgba string for subtle shadows
function hexToRgba(hex, alpha = 0.16) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

//nav//
function Nav({ toggleTheme, isDark }) {
  return (
    <div className="nav-button-container">
      <button id="changeTheme" role="none" className="mode" onClick={toggleTheme}>
        {isDark ? <i className="hn hn-sun-solid"></i> : <i className="hn hn-moon-solid"></i>}
      </button>
    </div>
  );
}

//profile//
function getTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = minutes(m);
  return (
    <p> {h}:{m}</p>
  )
}

function minutes(i) {
  if (i < 10) { i = "0" + i };
  return i;
};

function Profile() {
  return (
    <section id="profile" className="section">
      <div className="section">
        <h1 id="paragraph">Hi! My name is <span id="underlined-element" className="clickable-element">
          Youssef
          <img className="profile-image" src="/youssef.jpg" alt="my image"></img>
        </span>
          I'm an IT and Business Analytics graduate from <span id="underlined-element" className="clickable-element">
            Tunis Business School.
            <img className="profile-image" src="/tbs.jpg" alt='picture of Tunis Business School'></img>
          </span>
        </h1>
        <button className='profile-contact'><a href='mailto: youssefechadysfaxi@gmail.com'>Say hello </a><i class="hn hn-comment-dots-solid"></i></button>
      </div>
      <div className="time">
        <div className="arrow"><a href='#projects'><FaArrowDown /></a></div>
        <div id="clock">{getTime()}</div>
      </div>
    </section>
  )
}

//projects//
const myProjects = [
  {
    title: "Ant Colony Optimization simulation",
    description: "An ACO algorithm that finds the optimal path in a composite objective algorithm with distance and elevation variables.",
    emoji: <i className="hn hn-chart-network-solid"></i>,
    color: "#a58eff",
    year: "2025",
    link: "none",
    github: "https://github.com/elaxolotl/ACO-simulation",
    type: "simulation",
    tech: <FaJava />
  },
  {
    title: "Tunisair delay predictor",
    description: "ML model that predicts flight delay in minutes using a TunisAir dataset, built with CatBoost.",
    emoji: <i className="hn hn-plane-solid"></i>,
    color: "#7ec8ff",
    year: "2025",
    link: "none",
    github: "https://github.com/elaxolotl/flight-delay-prediction",
    type: "machine learning",
    tech: <FaPython />
  },
  {
    title: "Gavel: an API for managing detained goods",
    description: "An API that manages auctions for detained goods in Tunisian ports.",
    emoji: <i className="hn hn-bullhorn"></i>,
    color: "#8fbf9f",
    year: "2025",
    link: "https://gavel-elaxolotl-elaxolotls-projects.vercel.app",
    github: "https://github.com/elaxolotl/Gavel",
    type: "web service",
    tech: <SiFlask />
  },
  {
    title: "Hive: game of life with aging mechanics",
    description: "Hive is an extension of Conway's game of life with new aging and lifespan features for cells.",
    emoji: <i className="hn hn-grid-solid"></i>,
    color: "#ffd27a",
    year: "2025",
    link: "none",
    github: "https://github.com/elaxolotl/hive",
    type: "simulation",
    tech: <FaJava />
  },
  {
    title: "Ecortie",
    description: "Ecortie is an ecofriendly product that makes fertilizer out of nettles, used coffee grounds, and tea leaves.",
    emoji: <i className="hn hn-seedlings-solid"></i>,
    color: "#6fbf6f",
    year: "2024",
    link: "https://ecortie.netlify.app/",
    github: "https://github.com/elaxolotl/ecortie",
    type: "website",
    tech: <><FaReact />&nbsp;<FaCss3Alt /></>
  },
  {
    title: "Dispatch",
    description: "A news website.",
    emoji: <i className="hn hn-newspaper-solid"></i>,
    color: "#d0d0d0",
    year: "2024",
    link: "https://dainty-medovik-89072b.netlify.app",
    github: "https://github.com/elaxolotl/Dispatch",
    type: "web app",
    tech: <><FaReact />&nbsp;<FaCss3Alt /></>
  }
];

function Projects() {
  const [projectsToShow, setProjectsToShow] = useState(2);
  const [showMore, setShowMore] = useState(true);

  const handleSeeMore = () => {
    setProjectsToShow(prevCount => prevCount + 2);
  };

  const handleHide = () => {
    setProjectsToShow(2);
    setShowMore(true);
  };

  return (
    <section id="projects" className="section">
      <h3 id="title">projects.</h3>
      <div className="project-cards">
        {myProjects.slice(0, projectsToShow).map((project, index) => (
          <div className='card' key={index} style={{ ['--accent']: hexToRgba(project.color || '#000000', 0.12) }}>
            <div className='project-card-header'>
              <span className='project-emoji' aria-hidden="true" style={{ color: project.color }}>{project.emoji}</span>
              <span className='project-year'>{project.year}</span>
            </div>
            <div className='projects-text'>
              <h2>{project.title}</h2>
              <p className='year'>{project.type}</p>
              <p className='project-description'>{project.description}</p>
              <div className='project-links'>
                {project.link === "none" ? (
                  <i className="hn hn-eye-cross-solid" style={{ marginBottom: '-0.3vh' }}></i>
                ) : (
                  <button><a href={project.link} target='_blank' rel='noreferrer'>view <i className="hn hn-external-link-solid" style={{ marginBottom: '-0.3vh' }}></i></a></button>
                )}
                {project.github === "private" ? (
                  <FaLock style={{ marginBottom: '-0.5vh' }} />
                ) : (
                  <button><a href={project.github} target='_blank' rel='noreferrer'>see code <i className="hn hn-github" style={{ marginBottom: '-0.5vh' }}></i></a></button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showMore && projectsToShow < myProjects.length ? (
        <div className='btn'>
          <button className="clickable-element" onClick={handleSeeMore}>
            <h2>see more</h2>
          </button>
        </div>
      ) : (
        <div className='btn'>
          <button className="clickable-element" onClick={handleHide}>
            <h2>Hide</h2>
          </button>
        </div>
      )}
    </section>
  );
}

//work//

const myWork = [
  {
    company: "COGNIRA",
    role: "Data Systems Intern",
    time: "July 2026 - Feb 2026",
    description: "Designed and built a graph based calculation & analysis engine for QA"
  },
  {
    company: "HI INTERNS",
    role: "AI & Automation Intern",
    time: "July 2025 - Oct 2025",
    description: "Built an automated content curation system"
  }
]

function Work() {
  return (
    <section id="work" className="section">
      <h3 id="title">work.</h3>
      <div className="project-cards work-cards">
        {myWork.map((work, index) => (
          <article className='work-card' key={index}>
            <div className='work-card-header'>
              <p className='company'>{work.company}</p>
              <span className='work-time'>{work.time}</span>
            </div>
            <p className='work-role'>{work.role}</p>
            <p className='work-description'>{work.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

//stacks//

const myStacks = [
  {
    name: "JavaScript",
    icon: <TbBrandJavascript />,
    color: "#ede7b4"
  },
  {
    name: "Flask",
    icon: <SiFlask />,
    color: "#e0e0e0"
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#a8d6e3"
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "#e0b884"
  },
  {
    name: "SQL",
    icon: <SiMysql />,
    color: "#9ddbed"
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#f7dfad"
  },
  {
    name: "R",
    icon: <SiR />,
    color: "#81a7d6"
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#f7baab"
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#a5b5f0"
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    color: "#cccccc"
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    color: "#b6f0ed"
  },
  {
    name: "Kotlin",
    icon: <SiKotlin />,
    color: "#dd9ae3"
  }
]

function Stacks() {
  return (
    <section id='stacks' className='section'>
      <h3>tech stack.</h3>
      <div className='icons'>
        {myStacks.map(function (item) {
          return (
            <div key={item.index} style={{ borderColor: item.color }} className='icon'>
              {item.icon}
              {item.name}
            </div>);
        })}
      </div>
    </section>
  );
}

//contact//

function Contact() {
  return (
    <section id="contact" className="section">
      <h3 id="title">contact.</h3>
      <h1 id="paragraph">If you want to get in touch, you can <span id="underlined-element" className="clickable-element"><a href="mailto:youssefechadysfaxi@gmail.com">email
        me</a></span> or visit <span id="underlined-element" className="clickable-element"><a
          href="https://www.linkedin.com/in/youssef-sfexi-b8758b26a/" target="_blank">my Linkedin</a></span>.
        You can also <span id="underlined-element" className="clickable-element"><a href="/Resume-YoussefEchadySfaxi.pdf"
          download="/Resume-YoussefEchadySfaxi.pdf">
          download my resume</a></span> or <span id="underlined-element" className="clickable-element">
          <a href="https://github.com/elaxolotl" target="_blank">check my Github</a></span> for more information about me!
      </h1>
      <div id="contact-icons">
        <a className="clickable-element" href="https://www.linkedin.com/in/youssef-sfexi-b8758b26a/">
          <FaLinkedin />
        </a>
        <a className="clickable-element" href="mailto:youssefechadysfaxi@gmail.com">
          <IoIosMail />
        </a>
        <a className="clickable-element" href="https://www.facebook.com/youssefechady.sfaxi/" target="_blank">
          <FaFacebookSquare />
        </a>
        <a className="clickable-element" href="https://github.com/elaxolotl" target="_blank">
          <PiGithubLogoFill />
        </a>
      </div>
    </section >
  );
}

//footer//
function Footer() {
  return (
    <footer className="section">
      <div className="footer">
        <div>
          <h3>made with <i className="hn hn-heart-solid" style={{ color: '#ff36f2' }}></i></h3>
        </div>
        <div className="clickable-element">
          <a href="#profile">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {

  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div data-theme={isDark ? "dark" : "light"} className='app'>
      <Cursor />
      <Nav toggleTheme={toggleTheme} isDark={isDark} />
      <Profile />
      <Projects />
      <Work />
      <Stacks />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
