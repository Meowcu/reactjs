import React from 'react'

function Header() {

    return (
        <>
            {/* Header */}
            <header
            className="w3-display-container w3-content w3-wide"
            style={{ maxWidth: 1500 }}
            id="home"
            >
            <img
                className="w3-image"
                src={require("../images/logo-og.png")}
                alt="Architecture"
                width={1500}
                height={800}
            />
            <div className="w3-display-middle w3-margin-top w3-center">
                <h1 className="w3-xxlarge w3-text-white">
                <span className="w3-padding w3-black w3-opacity-min">
                    <b>MEO</b>
                </span>{" "}
                <br/>
                <br/>
                <span className="w3-padding w3-purple w3-opacity-min">
                    <b>React Template Training</b>
                </span>{" "}
                </h1>
            </div>
            </header>
        </>

    )
}

export default Header