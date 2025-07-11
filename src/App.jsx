import './mediaQueries.css';
//icons
import { FaLinkedin, FaReact, FaFacebookSquare, FaArrowUp, FaJava, FaPython, FaCss3Alt, FaHtml5} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFlask, SiR, SiKotlin } from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoLogoJavascript, IoOpenOutline } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaArrowDown, FaLock } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { SiMysql } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

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
    <nav>
      <ul className="nav-links">
        <li ><a href="#profile"><button>Me</button></a></li>
        <li ><a href="#projects"><button>Projects</button></a></li>
        <li ><a href="#stacks"><button>Skills</button></a></li>
        <li><a href="#contact"><button>Contact</button></a></li>
      </ul>
      <button id="changeTheme" role="none" className="mode" onClick={toggleTheme}><BsFillMoonStarsFill />
      </button>
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
        <h1 id="paragraph">Hi! My name is <span id="underlined-element" className="clickable-element">
          Youssef
          <img className="profile-image" src="/youssef.jpg" alt="my image"></img>
        </span>
          I'm an IT and Business Analytics Student at <span id="underlined-element" className="clickable-element">
            Tunis Business School.
            <img className="profile-image" src="/tbs.jpg" alt='picture of Tunis Business School'></img>
          </span>
        </h1>
        <button className='profile-contact'><a href='mailto: youssefechadysfaxi@gmail.com'>Say hello </a><TbSend /></button>
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
    image: "/ACO.jpg",
    year: "2025",
    link: "none",
    github: "https://github.com/elaxolotl/ACO-simulation",
    type:"simulation",
    tech: <FaJava />
  },
  {
    title: "Hive: game of life with aging mechanics",
    description: "Hive is an extension of Conway's game of life with new aging and lifespan features for cells.",
    image: "/hive.jpg",
    year: "2025",
    link: "none",
    github: "https://github.com/elaxolotl/hive",
    type:"simulation",
    tech: <FaJava />
  },
  {
    title: "Gavel: an API for managing detained goods",
    description: "An API that manages auctions for detained goods in Tunisian ports.",
    image: "/gavel.jpg",
    year: "2025",
    link: "none",
    github: "https://github.com/elaxolotl/Gavel",
    type:"web service",
    tech: <SiFlask />
  },
  {
    title: "Ecortie",
    description: "Ecortie is an ecofriendly product that makes fertilizer out ouf nettles, used coffee grounds, and tea leaves",
    image: "/ecortie.jpg",
    year: "2024",
    link: "https://ecortie.netlify.app/",
    github: "https://github.com/elaxolotl/ecortie",
    type:"website",
    tech: <><FaReact />&nbsp;<FaCss3Alt /></>
  },
  {
    title: "Agrinexus",
    description: "An app to help farmers forecast their yield based on a periodic rainfall data.",
    image: "/agrinexus.jpg",
    year: "2025",
    link: "none",
    github: "https://github.com/AminelMhl/AgriNexus",
    type:"desktop app",
    tech: <FaJava />
  },
  {
    title: "Dispatch",
    description: "A news website.",
    image: "/dispatch.jpg",
    year: "2024",
    link: "https://dainty-medovik-89072b.netlify.app",
    github: "https://github.com/elaxolotl/Dispatch",
    type:"web app",
    tech: <><FaReact />&nbsp;<FaCss3Alt /></>
  },
  {
    title: "El Frigo",
    description: "A web app that suggests recipes based on user-input ingredients. Built with Next.js, Tailwind CSS, and the Spoonacular API.",
    image: "/el-frigo.jpg",
    year: "2025",
    link: "https://el-frigo.vercel.app",
    github: "https://github.com/elaxolotl/el-frigo",
    type:"web app",
    tech: <><RiNextjsFill />&nbsp;<RiTailwindCssFill /></>

  },
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
      <h3 id="title">My projects</h3>
      <div className="project-cards">
        {myProjects.slice(0, projectsToShow).map((project, index) => (
          <div className='card' key={index}>
            <div className='container'>
              <img src={project.image} alt={project.title} />
              <div className='project-description'><p>{project.description}<br/><div style={{marginTop:"1vh"}}>{project.tech}</div></p></div>
            </div>
            <div className='projects-text'>
              <h2>{project.title}</h2>
              <p className='year'>{project.year} | {project.type}</p>
              {project.link === "none" ? (
                <FaEyeSlash style={{marginBottom:'-0.3vh', marginRight:'1vw'}}/>
              ) : (
                <button><a href={project.link} target='_blank'>View <IoOpenOutline style={{marginBottom:'-0.3vh'}}/></a></button>
              )}
              {project.github === "private" ? (
                <FaLock style={{marginBottom:'-0.5vh'}}/>
              ) : (
                <a href={project.github} target='_blank'><PiGithubLogoFill style={{marginBottom:'-0.5vh'}}/></a>
              )}
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
    name: "JavaScript",
    icon: <TbBrandJavascript />,
    color: "#ede7b4"
  },
  {
    name: "Flask",
    icon: <SiFlask />,
    color: "#FFFFFF"
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
    icon: <SiMysql  />,
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
    icon: <SiKotlin  />,
    color: "#dd9ae3"
  }
]

function Stacks() {
  return (
    <section id='stacks' className='section'>
      <h3>Tech stack</h3>
      <div className='icons'>
        {myStacks.map(function (item) {
          return (
            <div key={item.index} style={{ backgroundColor: item.color }} className='icon'>
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
      <h3 id="title">Contact me</h3>
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
          <h3>Made with &#128151;</h3>
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

export default App;
