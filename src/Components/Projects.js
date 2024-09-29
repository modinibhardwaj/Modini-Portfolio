import React from 'react';
import { useEffect } from 'react';
import ProjectBox from './ProjectBox';
import WaterBody from '../images/WaterBody.jpg'
import WasteSeg from "../images/Automatic waste segregator.jpg"
import facial from "../images/Facial recognition.jpg"
import './Project.css';
import Food from '../images/FOOD.jpg'
import Tilt from 'react-parallax-tilt';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import slideAnime from '../LottieFiles/Animation - 1725975411559.json'
import Lottie from "lottie-react";

const Projects = () => {
 
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) 
    }
  }, [emblaApi])


  return (
    <div className='projectContainer' >
    <div className='inline-flex items-center justify-center mx-auto w-[100%]'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <p className='mt-16 ml-6'>swipe to see</p>
      <Lottie className="mt-16 w-16" animationData={slideAnime} loop={true} /> 
    </div>
      <div className='project-head' ref={emblaRef}>
      <div className='project' >
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={WaterBody} projectName="Water Body"/>
          </Tilt>
        </div>       
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={facial} projectName="Facial recognition" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={WasteSeg} projectName="Waste Segragator"/>
          </Tilt>
        </div>   
      
        </div>
        </div>
      </div>
  )
}



export default Projects