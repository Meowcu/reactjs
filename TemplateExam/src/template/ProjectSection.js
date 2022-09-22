import React from 'react'
function ProjectSection() {
  return (
    <>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <div className="w3-container w3-padding-32" id="projects">
    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
      Projects
    </h3>
  </div>
  <div className="w3-row-padding">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
        JETEMV
        </div>
        <img src={require("../images/img-1.jpg")} alt="House" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
        ISAFE
        </div>
        <img src={require("../images/img-2.jpg")} alt="House" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
        CODE SIMILARITY DETECTION VIA GRAPH SIMILARITY
        </div>
        <img src={require("../images/img-3.jpg")} alt="House" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
        IGA AIRPORT SIMULATION(UNITY3D)
        </div>
        <img src={require("../images/img-4.jpg")} alt="House" style={{ width: "100%" }} />
      </div>
    </div>
  </div>
  <div className="w3-row-padding">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
        MULTIPLAYER PROCEDURAL VISUAL SANDBOX GAME LIKE MINECRAFT(UNITY3D)
        </div>
        <img src={require("../images/img-5.jpg")} alt="House" style={{ width: "99%"}} />
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
        DATA ANALYSIS IN LOCATION BASED SOCIAL NETWORK(BIG DATA)
        </div>
        <img src={require("../images/img-8.jpg")} alt="House" style={{ width: "99%" }} />
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
        OBJECT TRACKING WITH MULTI CAMERA SYSTEM
            </div>
        <img src={require("../images/img-7.jpg")} alt="House" style={{ width: "99%" }} />
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
        WHICH TEAM SUPPORTER IS MORE AGGRESSIVE?
            </div>
        <img src={require("../images/img-6.jpg")} alt="House" style={{ width: "99%" }} />
      </div>
    </div>
  </div>
</>
  )
}

export default ProjectSection