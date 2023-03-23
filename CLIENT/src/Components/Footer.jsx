import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer() {
  return (
    <div className='footer'>
      <p id='footer-text'>Created by 
        <a href="https://github.com/Mattrob10/Travel-Gear"target="_blank">
            <i className="fab fa-github"></i>
          </a>Aloe, Kirk, & Matt &copy; {year}</p>
    </div>
  );
}

export default Footer;