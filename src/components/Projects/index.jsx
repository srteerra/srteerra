import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "../SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Bitcoffee",
    description:
      "Your page, your own place ☕. A Web3 platform for all content creators to continue doing what we like and enjoy.",
    image: "/bitcoffee.png",
    github: "https://github.com/srteerra/bitcoffee",
    link: "https://github.com/srteerra/bitcoffee",
  },
  {
    name: "Doycoin",
    description:
      "A decetralized web application where you can plant trees with your Crypto!",
    image: "/doycoin.png",
    github: "https://github.com/srteerra/doycoin",
    link: "https://github.com/srteerra/doycoin",
  },
  {
    name: "CGRT",
    description:
      "An application to solve the AstraZeneca problem, where scientists needed a place to present their ideas and research and thus connect with other researchers from different parts of the world. This idea was developed in just 2 days and reached the prototype phase.",
    image: "/cgrt.png",
    github: "https://github.com/srteerra/covid19-global-research-tracker",
    link: "https://github.com/srteerra/covid19-global-research-tracker",
  },
  {
    name: "Garbler",
    description:
      "More than a garbage truck tracking platform, we're offering a free-to-use interface and data analyze for organizations.",
    image: "/garbler.png",
    github: "https://github.com/srteerra/garbler",
    link: "https://github.com/srteerra/garbler",
  },
  {
    name: "Certchain",
    description:
      "Descentralized platform for certification through Blockchain, where companies and / or individuals can upload documents to validate them with these technologies and ensure a higher value varacidad.",
    image: "/certchain.png",
    github: "https://github.com/srteerra/certchain",
    link: "https://github.com/srteerra/certchain",
  },
  {
    name: "Dashy",
    description: "Dashy is a decentralized platform that allows users to streamline money transfers through the use of QRs.",
    image: "/dashy.png",
    github: "https://github.com/srteerra/dashy",
    link: "https://github.com/srteerra/dashy",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:max-w-5xl">
      <div className="my-10 text-center">
        <h1 className="font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-red-400 border-0 rounded"></hr>
        </h1>
        <p>You can see more of my projects in my Github profile.</p>
      </div>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection