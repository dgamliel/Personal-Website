import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import resume from '../../public/static/Daniel-Gamliel-Resume.pdf'
import "../css/index.css"

let boxTransition = "transition duration-500 ease-in-out transform hover:-translate-y-3"
let boxAesthetic = "flex flex-wrap items-center justify-center align-center bg-off-white m-3 text-lg rounded large-shadow h-60 pt-3 cursor-pointer ";
let boxStyling = boxAesthetic + boxTransition;

// markup
const IndexPage = () => {
  return (

    <div>

      {/* Nav Bar */}
      <header class="sticky top-0 z-50">
        <nav class="flex content-center bg-violet-400 h-20">
          <div class="flex-1 hover:bg-violet-500 cursor-pointer">
            <a href="#experience" class="text-center block text-xl p-6">
              Experience
            </a>
          </div>
          <div class="flex-1 hover:bg-violet-500 cursor-pointer">
            <a href="#projects" class="text-center block text-xl p-6">
              Projects
            </a>
          </div>
          <div class="flex-1 hover:bg-violet-500 items-stretch cursor-pointer">
            <a href="#" class="text-center block p-6 text-xl">
              About Me
            </a>
          </div>
        </nav>
      </header>
      
      {/* Photo and Header */}
      <main class="relative">

        <section class="text-center pt-8 custom-spacing">

          <StaticImage 
            src="../images/profile.jpeg" 
            alt="A day at UCSD"
            placeholder="blurred"
            className="large-shadow rounded-image"
            width={300}
            height={300}  
          >
          </StaticImage>
          <h1 class="text-7xl p-6 text-center">Daniel Gamliel</h1>
          <h2 class="text-2xl text-center">UCSB Computer Science — Class of 2020</h2>

          <div class="text-center mt-10">
            <form method="get" action={resume} target="_blank">
              <button type="submit" class="text-lg h-10 bg-yellow-500 hover:bg-yellow-300 text-white font-bold px-20 rounded-full">
                Resume
              </button>
            </form>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" class="bg-sea-green mt-8 custom-spacing">
          <h1 class="text-center text-3xl p-6">Experience</h1>

          <div class="grid grid-cols-3 gap-10">

            <div class={boxStyling}>
              <StaticImage 
                src="../images/Motorola_Logo.png" 
                alt="Motorola Logo"
                placeholder="blurred"
                className="scale-image"
              >
              </StaticImage>
              <h3 class="text-lg">Embedded Software Engineer</h3>
            </div>

            <div class={boxStyling}>
              <StaticImage 
                src="../images/Aleysian.png" 
                alt="Aleysian Logo"
                placeholder="blurred"
                className="scale-image"
              >
              </StaticImage>
              <h3 class="text-lg">Technical Consultant</h3>
            </div>

            <div class={boxStyling}>
              <StaticImage 
                src="../images/Qualcomm.png" 
                alt="Qualcomm Logo"
                placeholder="blurred"
                className="scale-image"
              >
              </StaticImage>
              <h3 class="text-lg">Software Engineering Intern - 5G</h3>
            </div>
          </div>

        </section>
  
        {/* Projects */}
        <section id="projects" class="mt-8 custom-spacing">
          <h1 class="text-center text-3xl p-6">Projects</h1>
        </section>
        </main>
    </div>
  )
}

export default IndexPage
