import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Modini Bhardwaj</b> and I am from Gurugram, India.
            I'm a <b>ML Engineer</b> and a College student pursuing <b>BTech in Artificial Intelligence</b>  from <b>CHANDIGARH UNIVERSITY</b> <br/><br/>
            {/* I have done an internship as a <b>software developer</b> at GoalFi which is a fintech startup. */}
            I've worked on exciting <b>projects</b> like <b>facial recognition</b>, IoT-based waste segregation, and water quality <b>monitoring apps</b>.
             <br/>
          </p>
          <p>
          With strong skills in <b>C++</b>, DBMS, and certifications in Microsoft <b> Azure AI </b> fundamentals and Oracle <b>Generative AI</b>, I'm always looking to push the limits of technology. I've also presented research paper at an <b>IEEE conference</b> and actively contribute to tech communities like IEEE and <b>Alexa Developer</b></p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='w-[100%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[60%] flex flex-wrap justify-center mx-auto'>
        
          <Tilt>
          <Skills skill='React' classes='SkillBox1'/>
          </Tilt>
          <Tilt>
            <Skills skill='Node' classes='SkillBox1' />
          </Tilt>
          <Tilt>
            <Skills skill='Express' classes='SkillBox1' />
          </Tilt>
          <Tilt>
            <Skills skill='MongoDb' classes='SkillBox1'/>
          </Tilt>
          <Tilt>
            <Skills skill='Tailwind' classes='SkillBox1'/>
          </Tilt>
       
          <Tilt>
            <Skills skill='Git' classes='SkillBox2'/>
          </Tilt>
          <Tilt>
            <Skills skill='Github' classes='SkillBox2'/>
          </Tilt>
          <Tilt>
            <Skills skill='Javascript' classes='SkillBox2' />
          </Tilt>
          <Tilt>
            <Skills skill='C++' classes='SkillBox2' />
          </Tilt>
          <Tilt>
            <Skills skill='Java' classes='SkillBox2'/>
          </Tilt>
        <Tilt>
          <Skills skill='Python' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Html' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Css' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Postman' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Figma' classes='SkillBox3' />
        </Tilt>
        
        <Tilt>
          <Skills skill='ChakraUi' classes='SkillBox'/>
        </Tilt>
        <Tilt>
          <Skills skill='Netlify' classes='SkillBox'/>
        </Tilt>
        <Tilt>
          <Skills skill='Npm' classes='SkillBox' />
        </Tilt>
        <Tilt>
          <Skills skill='Bootstrap' classes='SkillBox'/>
        </Tilt>
       
      </div>
    </>
  )
}

export default About