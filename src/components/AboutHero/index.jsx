import React from "react";
import "./styles.scss";
import longlogo from "../../assets/images/Logo_hwhite";
// import bgimage from "../../assets/images/AboutHero_bg";
// had trouble with bg stretching here so moved it to css file.

function AboutHero() {
  return (
    <section>

      {/* Title banner */}
      <div class="title-bg">
        <div class="container">
          <img src={longlogo} id="long-logo"></img>
          <div class="title-text">
            <h1>Our Company</h1>
          </div>
        </div>
      </div>
      
      {/* Placeholder */}
      "Team page goes here"

      {/* Email banner */}
      <div class="banner-bg">
        <div class="banner-text">
          <h1>Looking to chat?</h1>
          <p>
            {" "}
            Contact us at{" "}
            <a href="mailto:info@stackd.gg?subject=Web Inquiry">
              info@stackd.gg
            </a>
          </p>
        </div>
      </div>

    </section>
  );
}

export default AboutHero;
