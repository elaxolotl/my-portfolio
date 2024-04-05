import './App.css';
import './mediaQueries.css';
import { FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaFacebookSquare, FaArrowUp, FaMoon  } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlFill, PiGithubLogoFill } from "react-icons/pi";
import { IoIosMail, IoMdEye } from "react-icons/io";
import { FaArrowDownLong } from "react-icons/fa6";
import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Tilt from 'react-parallax-tilt';




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

//nav//


function Nav({ toggleTheme }) {
  return (
    <nav id="desktop-nav">
      <ul className="nav-links">
        <li ><a href="#profile"><button>Me</button></a></li>
        <li ><a href="#projects"><button>Projects</button></a></li>
        <li ><a href="#stacks"><button>Skills</button></a></li>
        <li><a href="#contact"><button>Contact</button></a></li>
        <li><button className="mode" onClick={toggleTheme}><FaMoon />
        </button></li>
      </ul>
    </nav>
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
        <h1 id="paragraph">Hi!&#128075; My name is <span id="underlined-element" className="clickable-element">
          Youssef
          <img className="profile-image" src="/youssef.jpg"></img>
        </span>
          I'm an IT and Business Analytics Student at <span id="underlined-element" className="clickable-element">
            Tunis Business School.
            <img className="profile-image" src="/tbs.jpg"></img>
          </span>
        </h1>
      </div>
      <div className="time">
        <div className="arrow"><a href='#projects'><FaArrowDownLong /></a></div>
        <div id="clock">{getTime()}</div>
      </div>
    </section>
  )
}

//projects//

const myProjects = [
  {
    title: "Galactic Explorer",
    description: "a React-based website offering an immersive journey through space exploration",
    image: "/galactic explorer.jpg",
    year: "2024",
    link: "https://sprightly-cuchufli-2c4619.netlify.app/",
    github: "https://github.com/elaxolotl/galactic-explorer"
  },
  {
    title: "Eye-Track",
    description: "Interactive eyeballs track cursor movement, demonstrating mouse tracking using HTML, CSS, and JavaScript.",
    image: "/eyeTrack.jpg",
    year: "2023",
    link: "https://leafy-rolypoly-67db4e.netlify.app/",
    github: "https://github.com/elaxolotl/Eye-Tracker"
  },
  {
    title: "Weather app",
    description: "Real-time weather app fetching data from WeatherAPI, allowing users to get weather info for different locations.",
    image: "/weather app.jpg",
    year: "2023",
    link: "https://transcendent-peony-2bf5a2.netlify.app/",
    github: "https://github.com/elaxolotl/weatherApp"
  },
  {
    title: "calculator",
    description: "One of my earliest projects, a straightforward calculator for basic arithmetic operations.",
    image: "/Calculator.jpg",
    year: "2023",
    link: "https://fluffy-dango-b3438b.netlify.app/",
    github: "https://github.com/elaxolotl/Calculator"
  },

];

function Projects() {
  const [projectsToShow, setProjectsToShow] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const handleSeeMore = () => {
    setProjectsToShow(prevCount => prevCount + 3);
  };

  const handleHide = () => {
    setProjectsToShow(3);
    setShowMore(true);
  };

  return (
    <section id="projects" className="section">
      <h3 id="title">My projects</h3>
      <div className="project-cards">
        {myProjects.slice(0, projectsToShow).map((project, index) => (
          <div className='card' key={index}>
            <div className='projects-text'>
              <h2>{project.title}</h2>
              <p className={'description'}>{project.description}</p>
              <div className='project-links'>
              </div>
              <p className='year'>{project.year}</p>
              <button>Open <GoArrowRight className='arrow'/></button>
            </div>
            <div className='image-card'>
            <Tilt><a href={project.link} target='_blank' rel="noopener noreferrer"><img src={project.image} alt={project.title} /></a></Tilt>
            </div>
          </div>
        ))}
      </div>
      {showMore && projectsToShow < myProjects.length ? (
        <div className='btn'>
          <button className="clickable-element" id='underlined-element' onClick={handleSeeMore}>
            <h2>See more</h2>
          </button>
        </div>
      ) : (
        <div className='btn'>
          <button className="clickable-element" id='underlined-element' onClick={handleHide}>
            <h2>Hide</h2>
          </button>
        </div>
      )}
    </section>
  );
}

//stacks//

const myStacks = [
  {
    name: "Html",
    icon: <FaHtml5 />,
    color: "#DD4B25"
  },
  {
    name: "Css",
    icon: <FaCss3Alt />,
    color: "#2862E9"
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript />,
    color: "#F7D724"
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#5ED3F3"
  },
  {
    name: "SQL",
    icon: <PiFileSqlFill />,
    color: "#00B6EA"
  }
]

function Stacks() {
  return (
    <section id='stacks' className='section'>
      <h3>Skills</h3>
      <div className='icons'>
        {myStacks.map(function (item) {
          return (
            <div className='icon'>
              <p style={{ color: `${item.color}` }}>{item.icon}</p>
              <h4>{item.name}</h4>
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
      <h3 id="title">Contact me</h3>
      <h1 id="paragraph">If you want to get in touch, you can <span id="underlined-element" className="clickable-element"><a href="mailto:youssefechadysfaxi@gmail.com">email
        me</a></span> or visit <span id="underlined-element" className="clickable-element"><a
          href="https://www.linkedin.com/in/youssef-sfexi-b8758b26a/" target="_blank">my Linkedin</a></span>.
        <br></br>You can also <span id="underlined-element" className="clickable-element"><a href="assets/Resume.pdf"
          download="assets/Resume.pdf">
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
          <h3>Stay great</h3>
        </div>
        <div className="clickable-element">
          <a href="#desktop-nav">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {

  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div data-theme={isDark ? "dark" : "light"} className='app'>
      <Cursor />
      <Nav toggleTheme={toggleTheme} />
      <Profile />
      <Projects />
      <Stacks />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
