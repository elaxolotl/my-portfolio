import './App.css';
import { FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaFacebookSquare, FaArrowUp, FaMoon } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlFill } from "react-icons/pi";
import { IoIosMail} from "react-icons/io";
import { FaArrowDownLong } from "react-icons/fa6";  
import React, {useState} from "react";
import AnimatedCursor from "react-animated-cursor";



//cursor//

function Cursor() {
  return (
    <div className="App">
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
function Nav({ toggleTheme })  {
  return (
    <nav id="desktop-nav">
      <ul class="nav-links">
        <li ><a href="#projects"><button>Projects</button></a></li>
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
        <h1 id="paragraph">Hi! My name is <span id="underlined-element" className="clickable-element">
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
    title: "Eye-Track",
    description: "Eye-track is a fun and interactive project where a pair of animated eyeballs follow the movement of your mouse cursor across the screen.",
    image: "/eye-track.jpg",
    year: "2023",
    id: 1
  },
  {
    title: "calculator",
    description: "A straightforward calculator for basic arithmetic operations. Perform addition, subtraction, multiplication, and division effortlessly with this easy-to-use tool.",
    image: "/calculator.jpg",
    year: "2023",
    id: 2
  },
  {
    title: "Weather app",
    description: "this is a simple weather app that uses an API to fetch and display weather condition in any given location.",
    image: "/weather app.jpg",
    year: "2023",
    id: 3
  }
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h3 id="title">My projects</h3>
      <div className="project-cards">
        {myProjects.map(function (project) {
          return (
            <div className='card' id={project.id}>
              <div className='image-card'>
                <a><img src={project.image}></img></a>
              </div>
              <div className='projects-text'>
                <h2>{project.title}</h2>
                <div className="fade">
                  <p className={'description'} >{project.description}</p>
                </div>
                <p className='year'>{project.year}</p>
              </div>
            </div>
          )
        })
        }
      </div>
      <div className='btn'>
        <button className="clickable-element" id='underlined-element'>
          <a href='/projects' target='_blank' >
            <h2>See more</h2>
          </a>
        </button>
      </div>
    </section>
  );
}

//stacks//

const myStacks = [
  {
    name: "html",
    icon: <FaHtml5 />
  },
  {
    name: "css",
    icon: <FaCss3Alt />
  },
  {
    name: "javascript",
    icon: <IoLogoJavascript />
  },
  {
    name: "react",
    icon: <FaReact />
  },
  {
    name: "sql",
    icon: <PiFileSqlFill />
  }
]

function Stacks() {
  return (
    <section id='stacks' className='section'>
      <h3>Stacks</h3>
      <div className='icons'>
        {myStacks.map(function (item) {
          return (
            <div className='icon'>
              {item.icon}
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
    <footer class="section">
      <div class="footer">
        <div>
          <h3>Stay great</h3>
        </div>
        <div class="clickable-element">
          <a href="#desktop-nav">
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
