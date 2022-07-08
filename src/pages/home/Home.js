import React from 'react'
import Contact from "../../components/contact/Contact"
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import ScrollToTop from "react-scroll-to-top";
// import GetAppIcon from '@material-ui/icons/GetApp';
import Resume from "../../img/Amaresh_Resume.pdf"
import { saveAs } from "file-saver";
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

// const pdfGenerate=()=>{

//   const doc = new jsPDF();

//   doc.addImage(Resume,'PNG',0,0,100,100)
//   doc.addPage()
//   // doc.text("Hello",10,10)
//   doc.save("resume.pdf")
// }

const saveFile =()=>{
  saveAs(
    Resume,
    "amaresh_resume.pdf"
  );
}


  return (
    <div className='home'>
      <ScrollToTop smooth top={50} width="20" height="20" viewBox="50 0 280 325" />
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

              &nbsp;
              &nbsp;

              <div style={{textAlign:'center'}} >
                <button className='resume' onClick={saveFile} >
                  {/* <GetAppIcon /> */}
                  Download Resume
                </button>
                </div>
               
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
            <h2> Front-End Development</h2>
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
