import React from 'react'
import About from './About'
import Contact from './Contact'
import ProjectSection from './ProjectSection'

function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
          <ProjectSection />
          <About/>
          <Contact/>
      </div>
  )
}

export default PageContent