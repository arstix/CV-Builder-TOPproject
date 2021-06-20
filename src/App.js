import React, { Component } from 'react'
import Experience from '../src/components/Experience.js'
import Education from '../src/components/Education.js'
import Skills from '../src/components/Skills.js'
import General from '../src/components/General.js'
import './styles/style.css'

class App extends Component {


    render() {
        return (
          <>
          <General />
          <Experience />
          <Education />
          <Skills />
          </>
        )
    }
}

export default App;
