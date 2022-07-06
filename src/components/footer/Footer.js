import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "./Footer.css"

function Footer() {

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
    <div className="footer">
      <div className="socialMedia">
       {/* <button onClick={github}  ><GithubIcon  /></button> 
       <button onClick={linkedin}> <LinkedInIcon/></button> 
       <button onClick={twitter}><TwitterIcon /></button>  */}

       <a href="https://github.com/amareshkar101" target="_blank" >
          <button >
          <GithubIcon  />
          </button>
        </a>

        <a href="https://www.linkedin.com/in/theamareshkar-frontend-developer/" target="_blank" >
          <button >
          <LinkedInIcon  />
          </button>
        </a>

        <a href="https://twitter.com/theamareshkar" target="_blank" >
          <button >
          <TwitterIcon  />
          </button>
        </a>

        
        <a href="mailto:amareshkar101@gmail.com" target="_blank" >
                <button >
                  <EmailIcon />
                </button>
              </a>

      </div>
      <p> &copy; 2022 &nbsp; Amaresh Kar</p>

    </div>
  );
}

export default Footer;