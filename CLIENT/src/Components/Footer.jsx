import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer() {
  return (
    <div className='footer'>
      <div className="copyrite">
        <h3 id="credit-title">Created by 
          Aloe, Kirk, & Matt &copy; {year}</h3>
          <h1><a href="https://github.com/Mattrob10/Travel-Gear"target="_blank">
            <i className="fab fa-github" id="github-repo-link"></i>
          </a></h1>
      </div>
       <div className="credits">
        <h3 id="credit-title-right">Our GitHub</h3>
        <div className="credit-info">
          <h4>Aloe<a href="https://github.com/eonflower"target="_blank">
            <i className="fab fa-github"id="github-icon"></i>
          </a></h4>
          <h4>Kirk <a href="https://github.com/kirksurber1"target="_blank">
            <i className="fab fa-github"id="github-icon"></i>
          </a></h4>
          <h4>Matthew <a href="https://github.com/Mattrob10"target="_blank">
            <i className="fab fa-github" id="github-icon"></i>
          </a></h4>
        </div>
       </div>
    </div>
  );
}

export default Footer;