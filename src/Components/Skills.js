import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap ,FaJava ,FaHtml5 ,FaCss3} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel ,SiChakraui , SiNetlify,SiTailwindcss} from "react-icons/si";


const Skills = ({skill,classes}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Python : <FaPython />,
        Java: <FaJava />,
        ChakraUi: <SiChakraui />,
        Tailwind: <SiTailwindcss />,
        Html: <FaHtml5 />,
        Css: <FaCss3 />,
        Netlify : <SiNetlify />

    }
    
  return (
    <div title={skill} className={classes}>
      {icon[skill]}
    </div>
  )
}

export default Skills
