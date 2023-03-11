import React from "react"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { DiBootstrap, DiCss3Full, DiDocker, DiGit, DiGithubBadge, DiHtml5, DiJavascript1, DiJira, DiNodejsSmall, DiNpm, DiPython, DiReact, DiSass } from "react-icons/di"
import { SiSolidity, SiTailwindcss, SiWeb3Dotjs, SiVuedotjs } from "react-icons/si"
import { FaVuejs } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"

const skills = [
  { skill: "HTML", icon: <DiHtml5 className="my-auto"/>},
  { skill: "CSS", icon: <DiCss3Full className="my-auto"/>},
  { skill: "SCSS", icon: <DiSass className="my-auto"/>},
  { skill: "JavaScript", icon: <DiJavascript1 className="my-auto"/>},
  { skill: "Python", icon: <DiPython className="my-auto"/>},
  { skill: "Vue", icon: <FaVuejs className="my-auto"/>},
  { skill: "Node.js", icon: <DiNodejsSmall className="my-auto"/>},
  { skill: "Vuex", icon: <SiVuedotjs className="my-auto"/>},
  { skill: "React", icon: <DiReact className="my-auto"/>},
  { skill: "Next.js", icon: <TbBrandNextjs className="my-auto"/>},
  { skill: "Tailwind CSS", icon: <SiTailwindcss className="my-auto"/>},
  { skill: "Bootstrap", icon: <DiBootstrap className="my-auto"/>},
  { skill: "Git", icon: <DiGit className="my-auto"/>},
  { skill: "GitHub", icon: <DiGithubBadge className="my-auto"/>},
  { skill: "Docker", icon: <DiDocker className="my-auto"/>},
  { skill: "Npm", icon: <DiNpm className="my-auto"/>},
  { skill: "Jira", icon: <DiJira className="my-auto"/>},
  { skill: "Solidity", icon: <SiSolidity className="my-auto"/>},
  { skill: "Web3.js", icon: <SiWeb3Dotjs className="my-auto"/>},
]

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl mb-20 md:mb-12">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Hosna and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Los Angeles, CA.
            </p>
            <br />
            <p>
              I graduated from California State University, Northridge in 2019
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-red-400">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map(({skill, icon}, idx) => {
                return (
                  <Fade triggerOnce key={idx} direction="up" delay={`${idx}0`} fraction={0} cascade>
                    <p
                        key={idx}
                        className="bg-gray-200 flex align-middle px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                        <span className="flex align-middle my-auto mr-2">{icon}</span> {skill}
                    </p>
                  </Fade>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection