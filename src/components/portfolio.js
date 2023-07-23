import React, { useState } from 'react';

function portfolio() { 
  return (
    <section>
      <div class="main-container">
        <div class="current-project-card" id="current-project-card">
          <div class="project-image">
            <img src="./assets/Iron-stride.png"></img>
          </div>
        <div class="project-details">
          <div class="project-title">
            <a href="https://github.com/blancahidalgo/iron-stride" target="_blank">Iron-stride</a>
          </div>
          <div class="project-languages">
            Handlebars / CSS / JS / 
          </div>
        </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="./assets/Horiseon-website.png"></img>  
          </div>
          <div class="project-details">
            <div class="project-title">
              <a href="https://gator2-0.github.io/HTML-CSS-Git-Homework/" target="_blank">Horiseon website</a>
            </div>
            <div class="project-languages">
              HTML / CSS
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="./assets/user-input.png"></img>
          </div>
          <div class="project-details">
            <div class="project-title">
              <a href="https://github.com/Gator2-0/SVG-Logo-Maker" target="_blank">SVG Logo Maker</a>
            </div>
            <div class="project-languages">
              JS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default portfolio;