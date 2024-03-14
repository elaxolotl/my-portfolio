import './App.css'

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
        <div className="arrow">&#10140;</div>
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
                <img src={project.image}></img>
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
  },
  {
    name: "css",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
  },
  {
    name: "javascript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"
  },
  {
    name: "react",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
  },
  {
    name: "sql",
    image: "https://www.svgrepo.com/show/331760/sql-database-generic.svg"
  }
]

function Stacks() {
  return (
    <section id='stacks' className='section'>
      <h3>Stacks</h3>
      {myStacks.map(function (item) {
        return (
          <>
            <img src={item.image} alt={item.name}></img>
          </>);
      })}
    </section>
  );
}

//contact//

function Contact() {
  return (
    <section id="contact" class="section">
      <h3 id="title">Contact me</h3>
      <h1 id="paragraph">If you want to get in touch, you can
        <span id="underlined-element" class="clickable-element"><a href="mailto:youssefechadysfaxi@gmail.com">email
          me</a></span> or visit
        <span id="underlined-element" class="clickable-element"><a
          href="https://www.linkedin.com/in/youssef-sfexi-b8758b26a/" target="_blank">my Linkedin</a></span>.
        <br></br>You can also
          <span id="underlined-element" class="clickable-element"><a href="assets/Resume.pdf"
            download="assets/Resume.pdf">
            download my CV</a></span>
          or
          <span id="underlined-element" class="clickable-element">
            <a href="https://github.com/elaxolotl" target="_blank">check my Github</a></span>
          for more information about me
      </h1>
      <div id="contact-icons">
        <a class="clickable-element" href="https://www.linkedin.com/in/youssef-sfexi-b8758b26a/"><i
          class="fa-brands fa-linkedin"></i></a>
      <a class="clickable-element" href="mailto:youssefechadysfaxi@gmail.com"><i
        class="fa-solid fa-envelope"></i></a>
      <a class="clickable-element" href="https://www.facebook.com/youssefechady.sfaxi/" target="_blank"><i
        class="fa-brands fa-square-facebook"></i></a>
      </div>
   </section >
  );
}

function App() {
  return (
    <>
      <Profile />
      <Projects />
      <Stacks />
      <Contact />
    </>
  )
}

export default App
