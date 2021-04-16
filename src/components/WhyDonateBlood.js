import React from "react";
import "../static/WhyDonateBlood.css";
import lifeline from "../images/lifeline.png";

  export default ({ close }) => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
         </a>
        <div className="why_donate"> <h3>Why Donate Blood?</h3></div>
          <div className="content">
          {" "}
          Every 2 Seconds, someone in the country is in need of blood.<br />
          Every year our nation requires about 4 Crore units of blood.<br />
          Out of which only a meager 5 Lakh units of blood are available.<br /><br />
          
          An adequate amount of blood is needed in all health care facilities to meet the urgent need
          for patients facing trauma and other lifesaving procedures, such as blood transfusions – 
          which saves millions of lives each year. Donating blood is a simple procedure that can be 
          done within an hour.<br /><br />
          Safe blood saves lives and improves health. It is the most precious gift that anyone can give 
          to another person: the gift of life.<br />
          </div>
      </div>
    );