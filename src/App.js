import React from 'react'
import Head from './components/head/Head';
import data from './data';
import About from './components/about/About';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer'
import Work from './components/Work/Work';

function App() {
  const [thema, setThema] = React.useState(true);
  let changeThems = () => {
    setThema(thema ? false : true)
  }

  return (
    <div className={`wrapper ${ thema === true? 'white' : 'black'}`}>
      <Head data={data.mainPage} changeT={changeThems} thema={thema}/>
      <About thema={thema} data={data.aboutPage}/>
      <Skills data={data.scillsPage} />
      <Education data={data.educationPage}/>
      <Work data={data.comExpPage}/>
      <Projects thema={thema} data={data.worksPage}/>
      <Footer data={data.footerPage}/>
    </div>
  );
}

export default App;
