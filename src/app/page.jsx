"use client" // this is a client component
import AboutSection from "@/components/About";
import AchievementsSection from "@/components/Achievements";
import ExperienceSection from "@/components/Experience";
import TopSection from "@/components/Home";
import ProjectsSection from "@/components/Projects";
import React from "react"
import { BsTelephoneFill } from "react-icons/bs"
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai"
import { Fade } from "react-awesome-reveal";
import CertificatesSection from "@/components/Certificates";

export default function Home() {
  return (
    <>
      {/* <div className="fixed z-50 left-5 md:left-auto right-5 bottom-5 bg-stone-900 dark:bg-white p-5 w-100 md:w-[40%] lg:w-[25%] xl:w-[20%] rounded-lg">
        <div className="text-white flex justify-between dark:text-slate-900">
          <div>
            <h1 className="text-3xl font-bold">👋 Hire me!</h1>
            <p>You can contact me right now here.</p>
          </div>
          <BsTelephoneFill size={25} className="w-[50px] text-lg self-center text-white dark:text-slate-900"/>
        </div>
      </div> */}
      
      <div className="fixed z-50 left-5 bottom-5 hidden lg:block">
        <Fade triggerOnce direction="up" delay={3000}>
          <div className="text-white flex justify-between dark:text-slate-900">
            <div className="flex flex-col items-center justify-center gap-6">
              <a href="https://github.com/srteerra" rel="noreferrer" target="_blank">
                  <AiOutlineGithub
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                  />
              </a>
              <a
                  href="https://www.instagram.com/srteerra/"
                  rel="noreferrer"
                  target="_blank"
              >
                  <AiOutlineInstagram
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                  />
              </a>
              <a
                  href="https://www.linkedin.com/in/angel-yadiel-lopez-rivera-a83499219/"
                  rel="noreferrer"
                  target="_blank"
              >
                  <AiOutlineLinkedin
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                  />
              </a>
              <hr className="w-32 rotate-90 h-1 mx-auto mt-16 mb-8 bg-red-400 border-0 rounded"></hr>
            </div>
          </div>
        </Fade>
      </div>
      
      <TopSection/>
      <AboutSection/>
      <ExperienceSection/>
      {/* <CertificatesSection/> */}
      <AchievementsSection/>
      <ProjectsSection/>
    </>
  );
}
