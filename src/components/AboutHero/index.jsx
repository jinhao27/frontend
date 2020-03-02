import React from "react";
import "./styles.scss";
import longlogo from "../../assets/images/Logo_hwhite";
import AboutBody from "../AboutBody";
// import bgimage from "../../assets/images/AboutHero_bg";
// had trouble with bg stretching here so moved it to css file.

function AboutHero() {
  return (
    <section>

      {/* Title banner */}
      <div class="title-bg">
        <img src={longlogo} id="long-logo"></img>
        <div class="title-text">
          <h1>Our Company</h1>
        </div>
      </div>
      
      {/* About Body */}
      <AboutBody />

      {/* Email banner */}
      <div class="banner">
        <h1>Looking to chat?</h1>
        <p>
          {" "}
            Contact us at{" "}
            <a href="mailto:info@stackd.gg?subject=Web Inquiry">
              info@stackd.gg
            </a>
        </p>
      </div>

    </section>
  );
}

export default AboutHero;
