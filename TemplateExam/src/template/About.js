import React from 'react'

function About() {
    return (
<>
  <div className="w3-container w3-padding-32" id="about">
    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
      Hakkında
    </h3>
  </div>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="w3-row-padding w3-grayscale">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={require("../images/meo.JPG")} alt="Emre" style={{ width: "100%" }} />
      <h3>Mehmet Emre ÖNDER</h3>
      <p className="w3-opacity">Senior Software Engineer</p>
      <p>
      I'm Mehmet Emre. I graduated from YTU - Computer Engineering. And I'm working as a senior software engineer at DGPAYS.
        <br />
      DGPAYS is a payment solutions company. 
      </p>
      <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
      </p>
    </div>
  </div>
</>


    )
}

export default About