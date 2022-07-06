import React from 'react'
import Contact from "../../components/contact/Contact"
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "./Home.css"

function Home() {

  // const github=()=>{
  //   window.location.href ="https://github.com/amareshkar101"
  // }

  // const linkedin=()=>{
  //   window.location.href ="https://www.linkedin.com/in/theamareshkar-frontend-developer/"
  // }

  // const twitter=()=>{
  //   window.location.href ="https://twitter.com/theamareshkar"
  // }

  return (
    <div className='home'>
      <div className='i'>

        <div className='i-left'>
          <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hello, My name is </h2>
            <h1 className='i-name'>Amaresh</h1>
            <div className='i-title'>
              <div className='i-title-wrapper'>
                <div className='i-title-item'>Frontend Developer</div>
                <div className='i-title-item'>React JS Developer</div>
                <div className='i-title-item'>UI Developer</div>
              </div>
            </div>
            <p className='i-desc'>
              A frontend web developer with a passion for learning and creating.
            </p>


            <div className='socials'>

              <a href="https://github.com/amareshkar101" target="_blank" >
                <button >
                  <GithubIcon />
                </button>
              </a>


              &nbsp;
              &nbsp;

              <a href="https://www.linkedin.com/in/theamareshkar-frontend-developer/" target="_blank" >
                <button >
                  <LinkedInIcon />
                </button>
              </a>

              &nbsp;
              &nbsp;

              <a href="https://twitter.com/theamareshkar" target="_blank" >
                <button >
                  <TwitterIcon />
                </button>
              </a>

              &nbsp;
              &nbsp;

              <a href="mailto:amareshkar101@gmail.com" target="_blank" >
                <button >
                  <EmailIcon />
                </button>
              </a>

            </div>

          </div>
        </div>



        <div className='i-right'>
          <div className='i-bg'></div>
        </div>
      </div>


      <div className="skills">
        <div className="s-bg"></div>
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript, React JS, Redux, HTML, CSS, NPM,
              BootStrap, Material UI, Git, Github
            </span>
          </li>
        </ol>
      </div>

      <Contact />

    </div>

  )
}

export default Home
