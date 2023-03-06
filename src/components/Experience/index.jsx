import React from "react"
import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"
import SlideUp from "../SlideUp"

const experience = [
    { 
        company: "alfatech S.A. de C.V",
        from: "September 2020",
        to: "December 2020",
        position: "Frontend lead developer",
        location: "juarez, MX (remote)",
        description: [
            "Guided the web development team on a project from scratch, suggested the MEVN stack.",
            "Implemented and managed an agile methodology.",
            "Designed UI elements and helped the UX side",
            "Tested, coded, reviewed and delivered software on-time and acknowledged by the company"
        ],
    },
]

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="my-auto pb-12 md:py-16 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <h1 className="text-center font-bold text-4xl mb-20 md:mb-12">
          Work experience
          <hr className="w-6 h-1 mx-auto my-4 bg-red-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 justify-centerr align-middle md:p-4 text-left">
            {experience.map(({position, company, location, description, from, to}, idx) => {
                return (
                    <SlideUp offset="-300px 0px -300px 0px" key={idx}>
                        <div className="md:w-4/6 mx-auto" key={idx}>
                            <h1 className="text-2xl font-bold text-left capitalize">
                                {position}, {company}
                            </h1>
                            <p className="text-xl font-semibold text-red-400 capitalize">
                                {location}
                            </p>
                            <p className="my-2 capitalize">
                                {from} - {to}
                            </p>
                            <ul className="list-disc list-inside md:pl-12 text-justify">
                                {(description).map((desc, idx) => {
                                    return (
                                        <li key={idx}>{desc}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </SlideUp>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection