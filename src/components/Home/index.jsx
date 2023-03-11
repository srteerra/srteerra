"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { Fade, JackInTheBox } from "react-awesome-reveal";
import { BsGithub, BsFilePdf } from "react-icons/bs"

const TopSection = () => {
  return (
    <section id="home" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-38 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
        <Fade direction="up" delay={1200} triggerOnce>
          <Image
            src="/headshot.jpg"
            alt=""
            width={300}
            height={300}
            className="rounded-full shadow-2xl w-[300px] h-[300px]"
          />
        </Fade>
        </div>
        <div className="md:mt-2 md:w-3/5">
            <Fade direction="up" triggerOnce delay={1200}><h1 className="text-4xl text-stone-900 dark:text-white font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Angel!</h1></Fade>
            <Fade direction="up" delay={1500} triggerOnce>
              <p className="text-lg mt-4 mb-6 md:text-2xl">
                I&#39;m a{" "}
                <span className="font-semibold text-red-400">
                  Software Engineer{" "}
                </span>
                based in Mexico. Working remotely and never stopping learning. Always interested in Blockchain and Web3 but currently working as Web Frontend Developer.
              </p>
            </Fade>
          <div className="flex justify-center md:justify-start gap-3">
            <Fade direction="up" triggerOnce delay={1800}>
                <Link
                    to="projects"
                    className="text-neutral-100 flex align-middle font-semibold px-6 py-3 bg-red-400 rounded shadow hover:bg-red-700 hover:cursor-pointer"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <span className="flex align-middle my-auto mr-2"><BsGithub className="my-auto"/></span> Github
                </Link>
            </Fade>
            <Fade direction="up" triggerOnce delay={2000}>
                <Link
                    to="projects"
                    className="text-neutral-100 flex align-middle font-semibold px-6 py-3 bg-red-400 rounded shadow hover:bg-red-700 hover:cursor-pointer"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <span className="flex align-middle my-auto mr-2"><BsFilePdf className="my-auto"/></span> Download CV
                </Link>
            </Fade>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Fade direction="up" triggerOnce delay={2500}>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        </Fade>
      </div>
    </section>
  )
}

export default TopSection